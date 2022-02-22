function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderCSSValue(cssPropName, cssPropValue) {
  if (cssPropName.includes('horizontal')) {
    return `
      ${cssPropName.replace('horizontal', 'left')}: ${cssPropValue};
      ${cssPropName.replace('horizontal', 'right')}: ${cssPropValue};
    `;
  }
  if (cssPropName.includes('vertical')) {
    return `
      ${cssPropName.replace('vertical', 'top')}: ${cssPropValue};
      ${cssPropName.replace('vertical', 'bottom')}: ${cssPropValue};
    `;
  }

  return `${cssPropName}: ${cssPropValue};`;
}

function renderCSS(props, currentBreakpoint) {
  if (!props) return '';

  return Object.keys(props)
    .map((prop) => {
      const cssPropName = prop
        .split(/(?=[A-Z])/)
        .join('-')
        .toLowerCase();
      const cssPropValue = props[prop];
      const isCssPropValueAnObject =
        Object.prototype.toString.call(cssPropValue) === '[object Object]';
      const currentCssPropValue = cssPropValue[currentBreakpoint];

      if (currentBreakpoint == 'xs' && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      if (currentCssPropValue) {
        return renderCSSValue(cssPropName, currentCssPropValue);
      }
    })
    .filter(Boolean)
    .join('');
}

export { renderCSS, capitalize };
