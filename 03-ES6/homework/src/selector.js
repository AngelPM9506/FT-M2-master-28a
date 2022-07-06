var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ:
  //console.log((matchFunc(startEl)));
  if (startEl.childNodes >= 1) {
    if (matchFunc(startEl)) {
      resultSet.push(startEl);
      return resultSet;
    }
  } else {
    if (matchFunc(startEl)) {
      resultSet.push(startEl);
    }
    startEl.childNodes.forEach(child => {
      let elements = traverseDomAndCollectElements(matchFunc, child);
      if (elements.length > 0) {
        elements.forEach(element => {
          resultSet.push(element);
        });
      }
    });
  }
  //console.log(resultSet.length);
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // tu código aquí
  /**primero reconocer si empieza con # o . 
   * slector es un string...
  */
  //console.log(selector);
  selector.trim();
  let tagclass = selector.split('.');
  let parents = false;
  if (selector.includes('>')) {
    let tags = selector.split('>');
    var parentMorLes = [];
    tags.map(tagNamed => {
      parentMorLes.push(tagNamed.trim().toUpperCase());
    });
    parents = true;
  }
  if (selector.includes(' ')) {
    let tags = selector.split(' ');
    if (tags.length === 2) {
      var parentSpace = [];
      tags.map(tagNamed => {
        parentSpace.push(tagNamed.trim().toUpperCase());
      });
      parents = true;
    }
  }
  if (selector[0] === '#') {
    //console.log(selector + ' -> #');
    return 'id';
  }
  if (selector[0] === '.') {
    return 'class';
  }
  if (tagclass.length === 2) {
    return 'tag.class';
  }
  if (tagclass.length === 1 && !parents) {
    return 'tag';
  }
  if (parentMorLes !== undefined && parentMorLes.length === 2) {
    parentMorLes.unshift('>');
    return parentMorLes;
  }
  if (parentSpace !== undefined && parentSpace.length === 2) {
    parentSpace.unshift('&');
    return parentSpace;
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  //console.log(selectorType[0] === '>');
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = etiqueta => {
      if (etiqueta.id !== undefined) {
        if (selector.slice(1) === etiqueta.id) {
          return true;
        }
        return false;
      }
      return false;
    };
  } else if (selectorType === "class") {
    matchFunction = etiqueta => {
      //console.log(etiqueta);
      let existClass = false;
      if (etiqueta.classList !== undefined) {
        etiqueta.classList.forEach(clase => {
          if (clase === selector.slice(1)) {
            existClass = true;
          }
        });
      }
      return existClass;
    };
  } else if (selectorType === "tag.class") {
    matchFunction = etiqueta => {
      let tagClassEqual = false;
      let tag = selector.split('.')[0].toUpperCase();
      let clas = selector.split('.')[1];
      if (etiqueta.tagName === tag) {
        etiqueta.classList.forEach(tagClass => {
          if (tagClass === clas) {
            tagClassEqual = true;
          }
        });
      }
      return tagClassEqual;
    };
  } else if (selectorType === "tag") {
    matchFunction = etiqueta => {
      if (etiqueta.tagName === selector.toUpperCase()) {
        return true
      }
      return false;
    };
  } else if (selectorType[0] === '>') {
    matchFunction = etiqueta => {
      if (etiqueta.parentNode.tagName === selectorType[1] && etiqueta.tagName === selectorType[2]) {
        return true;
      }
      return false;
    }
  } else if (selectorType[0] === '&') {
    matchFunction = etiqueta => {
      if (selectorType[1] === 'BODY' && etiqueta.tagName === selectorType[2]) {
        return true;
      }
      if (etiqueta.parentNode.tagName === selectorType[1] && etiqueta.tagName === selectorType[2]) {
        return true;
      }
      return false;
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
