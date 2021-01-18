import React, { useEffect, useState, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookCounter value="1" />
      <Notification />
      <PlanetName id="5" />
    </div>
  );
};

const HookCounter = ({ value }) => {
  useEffect(() => { console.log('jk'); }, []);
  useEffect(() => { console.log('update'); });
  useEffect(() => () => { console.log('unmount'); }, []);
  return <p> {value}</p>;
}

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}/`)
    .then(res => res.json())
    .then(data => data);
}

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null
  }), []);
  const [dataState, setData] = useState(initialState);

  useEffect(() => {
    let canceled = false;
    setData(initialState);
    request()
      .then(data => !canceled && setData({
        data: data,
        loading: false,
        error: null
      }))
      .catch((e) => !canceled && setData({
        data: null,
        loading: false,
        error: e
      }));
    return () => canceled = true;
  }, [request, initialState]);
  return dataState;
}

const usePlanetInfo = (id) => {
  const request = useCallback(() => getPlanet(id), [id]);
  return useRequest(request);
}
const PlanetName = ({ id }) => {
  const { data, loading, error } = usePlanetInfo(id);
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <p> {data.name} - Planet Name</p>
    </div>
  );
}
const Notification = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 2000);
    return () => clearInterval(timeout);
  }, []);
  return (
    <div>
      { visible && <p> Hello </p>}
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);