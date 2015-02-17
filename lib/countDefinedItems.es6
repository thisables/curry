export default (args) => 
  [for (i of args) if (typeof i !== 'undefined') i].length;
