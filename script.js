/**
 * JS for blog post section exercise
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  /**
   * sets up necessary functionality when page loads
   */
  function init() {
    let betterClick = new Promise(buttonExecutor); 
    betterClick
      .then(function () { console.log('Option A'); })
      .catch(function () { console.log('Option B'); });

  }

    /**
   * Exerise 2.3
   */
  // function buttonExecutor(resolve, reject) {
  //   let myBtn = document.querySelector('button');
  //   myBtn.addEventListener('click', function() {
  //     resolve();
  //     console.log('clicked!');
  //   });
  //   setTimeout(reject, 5000);
  // }

  // Exercise 2.2
  function buttonExecutor(resolve, reject) {
    let myBtn = document.querySelector('button');
    myBtn.addEventListener('click', resolve);
    setTimeout(reject, 5000);
}

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }
  
  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})()