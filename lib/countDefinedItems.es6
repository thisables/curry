export default function(args) {
  return [for (i of args) if (typeof i !== 'undefined') i].length;
};
