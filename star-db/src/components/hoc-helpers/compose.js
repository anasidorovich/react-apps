const compose = ( ...funcs) => (comp) => {
  return funcs.reduceRight((prev, func) => func(prev), comp);
};

export default compose;