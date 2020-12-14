const makeSelectionWrapper = (selection, styles) => {
  if (!selection) return;

  const wrapper = document.createElement('span');

  wrapper.styles = styles;

  return wrapper;
};

const getUserSelection = () => {
  const selection = window.getSelection().toString();

  if (!selection) alert('Please, select text');

  return selection;
}

const handleElementStyles = (styleProp, styleValue) => {
  let styleField = `${styleProp}: ${styleValue};`;

  return styleField;
}


<button data-style-prop="font-weight" data-style-value="bold">B</button>