/* eslint-disable */

/*!
 * Vue directive for refresh of pulling up
 * bind | inserted | update | componentUpdated | unbind
 */

import Vue from 'vue';

let index = 0;

const bind = function() {
  // add inner state
  let hasMoved = false;
  let initPos = { };
  let prevPos = { };
  let initTouchPos = { };
  let prevTouchPos = { };

  let innerTs = ++ index;

  const init = function(el, touch) {
    hasMoved = false;
    initPos.top = prevPos.top = Number(el.style.top) || Number(el.offsetTop) || 0;
    initTouchPos.pageY = prevTouchPos.pageY = touch.pageY;
  }

  const resetState = function(el) {
    hasMoved && (hasMoved = false);
    el.style.top = initPos.top + 'px';
    initPos = { };
    prevPos = { };
    initTouchPos = { };
    prevTouchPos = { };
  }

  return function(el, binding, vnode) {
    el.addEventListener('touchstart', function(evt) {
      init(el, evt.touches[0]);
    });
    el.addEventListener('touchmove', function(evt) {
      if (! hasMoved) {
        hasMoved = true;
      }
      // console.log('moving', evt);
      const touch = evt.touches[0];
      const pageY = touch.pageY;
      console.log(prevPos.top, pageY, prevTouchPos.pageY);

      const addedTop = prevPos.top + pageY - prevTouchPos.pageY;
      prevPos.top = addedTop < prevPos.top ? prevPos.top : addedTop;

      prevTouchPos.pageY = pageY;

      el.style.top = prevPos.top + 'px';
      console.log(el.style.top, prevPos.top);
    });
    el.addEventListener('touchend', function(evt) {
      if (hasMoved) {
        hasMoved = false;
      }
      resetState(el);
    });
  }
}

Vue.directive('pull-up-refresh', {
  bind(el, binding, vnode) {

  },
  inserted(el, binding, vnode) {
    bind()(...arguments);
  },
  update(el, binding, vnode, oldVnode) {

  },
  componentUpdated(el, binding, vnode, oldVnode) {

  },
  unbind(el, binding, vnode) {

  }
});
