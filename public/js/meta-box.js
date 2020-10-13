/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/meta-box.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/meta-box.js":
/*!********************************!*\
  !*** ./src/script/meta-box.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Created by edward on 19.07.17.
 */
(function ($, LOC) {
  var $geolocations = $("#geolocations");
  var $wrapper = $("<div></div>").addClass("geolocations__copy-address");
  $geolocations.find(".geolocations__address-field").first().before($wrapper);

  function address_copy() {
    var $el = $("<div class=\"ui-front\">\n\t\t\t<label>".concat(LOC.autocomplete.label, "<br><input class=\"regular-text\" /></label>\n\t\t</div>"));
    /**
     * autocomplete select event
     * @param event
     * @param ui
     * @return {boolean}
     */

    function on_autocomplete_select(event, ui) {
      var item = ui.item;

      for (var field in item.values) {
        if (!item.values.hasOwnProperty(field)) continue;
        $("[data-geolocations-field=".concat(field, "]")).val(item.values[field]);
      }

      show_open();
      return false;
    }
    /**
     * add autocomplete
     * @param ul
     * @param item
     * @return {*|HTMLElement}
     * @private
     */


    $el.find("input").autocomplete({
      source: ajaxurl + "?action=geolocations_admin",
      minLength: 3,
      select: on_autocomplete_select // appendTo: "#geolocations__copy-address--list",

    }).autocomplete("instance")._renderItem = function (ul, item) {
      return $("<li class='copy-address__item'>").append("<span class=\"copy-address__item--title\">".concat(item.post_title, "</span>\n<span class='copy-address__item--id' >ID: ").concat(item.ID, "</span>\n<span class=\"copy-address__item--info\">").concat(item.address, "</span>")).appendTo(ul);
    };

    return $el;
  }

  function open_address_copy() {
    return $("<a href=\"#\">".concat(LOC.autocomplete.label, "</a>")).on("click", function (e) {
      e.preventDefault();
      show_copy();
    });
  }

  function show_open() {
    $wrapper.empty().append(open_address_copy());
  }

  function show_copy() {
    $wrapper.empty().append(address_copy());
  }

  show_open();
})(jQuery, Geolocations_MetaBox);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9tZXRhLWJveC5qcyJdLCJuYW1lcyI6WyIkIiwiTE9DIiwiJGdlb2xvY2F0aW9ucyIsIiR3cmFwcGVyIiwiYWRkQ2xhc3MiLCJmaW5kIiwiZmlyc3QiLCJiZWZvcmUiLCJhZGRyZXNzX2NvcHkiLCIkZWwiLCJhdXRvY29tcGxldGUiLCJsYWJlbCIsIm9uX2F1dG9jb21wbGV0ZV9zZWxlY3QiLCJldmVudCIsInVpIiwiaXRlbSIsImZpZWxkIiwidmFsdWVzIiwiaGFzT3duUHJvcGVydHkiLCJ2YWwiLCJzaG93X29wZW4iLCJzb3VyY2UiLCJhamF4dXJsIiwibWluTGVuZ3RoIiwic2VsZWN0IiwiX3JlbmRlckl0ZW0iLCJ1bCIsImFwcGVuZCIsInBvc3RfdGl0bGUiLCJJRCIsImFkZHJlc3MiLCJhcHBlbmRUbyIsIm9wZW5fYWRkcmVzc19jb3B5Iiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzaG93X2NvcHkiLCJlbXB0eSIsImpRdWVyeSIsIkdlb2xvY2F0aW9uc19NZXRhQm94Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7OztBQUlBLENBQUMsVUFBU0EsQ0FBVCxFQUFZQyxHQUFaLEVBQWdCO0FBRWhCLE1BQU1DLGFBQWEsR0FBR0YsQ0FBQyxDQUFDLGVBQUQsQ0FBdkI7QUFFQSxNQUFNRyxRQUFRLEdBQUdILENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJJLFFBQWpCLENBQTBCLDRCQUExQixDQUFqQjtBQUNBRixlQUFhLENBQUNHLElBQWQsQ0FBbUIsOEJBQW5CLEVBQW1EQyxLQUFuRCxHQUEyREMsTUFBM0QsQ0FBa0VKLFFBQWxFOztBQUlBLFdBQVNLLFlBQVQsR0FBdUI7QUFFdEIsUUFBTUMsR0FBRyxHQUFHVCxDQUFDLGtEQUNIQyxHQUFHLENBQUNTLFlBQUosQ0FBaUJDLEtBRGQsOERBQWI7QUFJQTs7Ozs7OztBQU1BLGFBQVNDLHNCQUFULENBQWdDQyxLQUFoQyxFQUF1Q0MsRUFBdkMsRUFBMEM7QUFBQSxVQUNsQ0MsSUFEa0MsR0FDMUJELEVBRDBCLENBQ2xDQyxJQURrQzs7QUFFekMsV0FBSyxJQUFNQyxLQUFYLElBQW9CRCxJQUFJLENBQUNFLE1BQXpCLEVBQWdDO0FBQy9CLFlBQUcsQ0FBQ0YsSUFBSSxDQUFDRSxNQUFMLENBQVlDLGNBQVosQ0FBMkJGLEtBQTNCLENBQUosRUFBdUM7QUFDdkNoQixTQUFDLG9DQUE2QmdCLEtBQTdCLE9BQUQsQ0FBd0NHLEdBQXhDLENBQTRDSixJQUFJLENBQUNFLE1BQUwsQ0FBWUQsS0FBWixDQUE1QztBQUNBOztBQUNESSxlQUFTO0FBQ1QsYUFBTyxLQUFQO0FBQ0E7QUFDRDs7Ozs7Ozs7O0FBT0FYLE9BQUcsQ0FBQ0osSUFBSixDQUFTLE9BQVQsRUFDQ0ssWUFERCxDQUNjO0FBQ2JXLFlBQU0sRUFBRUMsT0FBTyxHQUFDLDRCQURIO0FBRWJDLGVBQVMsRUFBRSxDQUZFO0FBR2JDLFlBQU0sRUFBRVosc0JBSEssQ0FJYjs7QUFKYSxLQURkLEVBTUdGLFlBTkgsQ0FNaUIsVUFOakIsRUFNOEJlLFdBTjlCLEdBTTRDLFVBQVVDLEVBQVYsRUFBY1gsSUFBZCxFQUFxQjtBQUNoRSxhQUFPZixDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQzJCLE1BQXJDLHFEQUNxQ1osSUFBSSxDQUFDYSxVQUQxQyxnRUFFa0NiLElBQUksQ0FBQ2MsRUFGdkMsK0RBRytCZCxJQUFJLENBQUNlLE9BSHBDLGNBSUxDLFFBSkssQ0FJSUwsRUFKSixDQUFQO0FBS0EsS0FaRDs7QUFhQSxXQUFPakIsR0FBUDtBQUNBOztBQUVELFdBQVN1QixpQkFBVCxHQUE0QjtBQUMzQixXQUFPaEMsQ0FBQyx5QkFBZ0JDLEdBQUcsQ0FBQ1MsWUFBSixDQUFpQkMsS0FBakMsVUFBRCxDQUErQ3NCLEVBQS9DLENBQWtELE9BQWxELEVBQTJELFVBQVNDLENBQVQsRUFBVztBQUM1RUEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FDLGVBQVM7QUFDVCxLQUhNLENBQVA7QUFJQTs7QUFFRCxXQUFTaEIsU0FBVCxHQUFxQjtBQUNwQmpCLFlBQVEsQ0FBQ2tDLEtBQVQsR0FBaUJWLE1BQWpCLENBQXdCSyxpQkFBaUIsRUFBekM7QUFDQTs7QUFDRCxXQUFTSSxTQUFULEdBQXFCO0FBQ3BCakMsWUFBUSxDQUFDa0MsS0FBVCxHQUFpQlYsTUFBakIsQ0FBd0JuQixZQUFZLEVBQXBDO0FBQ0E7O0FBRURZLFdBQVM7QUFFVCxDQXJFRCxFQXFFR2tCLE1BckVILEVBcUVXQyxvQkFyRVgsRSIsImZpbGUiOiJtZXRhLWJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdC9tZXRhLWJveC5qc1wiKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBlZHdhcmQgb24gMTkuMDcuMTcuXG4gKi9cblxuKGZ1bmN0aW9uKCQsIExPQyl7XG5cblx0Y29uc3QgJGdlb2xvY2F0aW9ucyA9ICQoXCIjZ2VvbG9jYXRpb25zXCIpO1xuXG5cdGNvbnN0ICR3cmFwcGVyID0gJChcIjxkaXY+PC9kaXY+XCIpLmFkZENsYXNzKFwiZ2VvbG9jYXRpb25zX19jb3B5LWFkZHJlc3NcIik7XG5cdCRnZW9sb2NhdGlvbnMuZmluZChcIi5nZW9sb2NhdGlvbnNfX2FkZHJlc3MtZmllbGRcIikuZmlyc3QoKS5iZWZvcmUoJHdyYXBwZXIpO1xuXG5cblxuXHRmdW5jdGlvbiBhZGRyZXNzX2NvcHkoKXtcblxuXHRcdGNvbnN0ICRlbCA9ICQoYDxkaXYgY2xhc3M9XCJ1aS1mcm9udFwiPlxuXHRcdFx0PGxhYmVsPiR7TE9DLmF1dG9jb21wbGV0ZS5sYWJlbH08YnI+PGlucHV0IGNsYXNzPVwicmVndWxhci10ZXh0XCIgLz48L2xhYmVsPlxuXHRcdDwvZGl2PmApO1xuXG5cdFx0LyoqXG5cdFx0ICogYXV0b2NvbXBsZXRlIHNlbGVjdCBldmVudFxuXHRcdCAqIEBwYXJhbSBldmVudFxuXHRcdCAqIEBwYXJhbSB1aVxuXHRcdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gb25fYXV0b2NvbXBsZXRlX3NlbGVjdChldmVudCwgdWkpe1xuXHRcdFx0Y29uc3Qge2l0ZW19ID0gdWk7XG5cdFx0XHRmb3IoIGNvbnN0IGZpZWxkIGluIGl0ZW0udmFsdWVzKXtcblx0XHRcdFx0aWYoIWl0ZW0udmFsdWVzLmhhc093blByb3BlcnR5KGZpZWxkKSkgY29udGludWU7XG5cdFx0XHRcdCQoYFtkYXRhLWdlb2xvY2F0aW9ucy1maWVsZD0ke2ZpZWxkfV1gKS52YWwoaXRlbS52YWx1ZXNbZmllbGRdKTtcblx0XHRcdH1cblx0XHRcdHNob3dfb3BlbigpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBhZGQgYXV0b2NvbXBsZXRlXG5cdFx0ICogQHBhcmFtIHVsXG5cdFx0ICogQHBhcmFtIGl0ZW1cblx0XHQgKiBAcmV0dXJuIHsqfEhUTUxFbGVtZW50fVxuXHRcdCAqIEBwcml2YXRlXG5cdFx0ICovXG5cdFx0JGVsLmZpbmQoXCJpbnB1dFwiKVxuXHRcdC5hdXRvY29tcGxldGUoe1xuXHRcdFx0c291cmNlOiBhamF4dXJsK1wiP2FjdGlvbj1nZW9sb2NhdGlvbnNfYWRtaW5cIixcblx0XHRcdG1pbkxlbmd0aDogMyxcblx0XHRcdHNlbGVjdDogb25fYXV0b2NvbXBsZXRlX3NlbGVjdCxcblx0XHRcdC8vIGFwcGVuZFRvOiBcIiNnZW9sb2NhdGlvbnNfX2NvcHktYWRkcmVzcy0tbGlzdFwiLFxuXHRcdH0pLmF1dG9jb21wbGV0ZSggXCJpbnN0YW5jZVwiICkuX3JlbmRlckl0ZW0gPSBmdW5jdGlvbiggdWwsIGl0ZW0gKSB7XG5cdFx0XHRyZXR1cm4gJChcIjxsaSBjbGFzcz0nY29weS1hZGRyZXNzX19pdGVtJz5cIikuYXBwZW5kKFxuXHRcdFx0XHRgPHNwYW4gY2xhc3M9XCJjb3B5LWFkZHJlc3NfX2l0ZW0tLXRpdGxlXCI+JHtpdGVtLnBvc3RfdGl0bGV9PC9zcGFuPlxuPHNwYW4gY2xhc3M9J2NvcHktYWRkcmVzc19faXRlbS0taWQnID5JRDogJHtpdGVtLklEfTwvc3Bhbj5cbjxzcGFuIGNsYXNzPVwiY29weS1hZGRyZXNzX19pdGVtLS1pbmZvXCI+JHtpdGVtLmFkZHJlc3N9PC9zcGFuPmBcblx0XHRcdCkuYXBwZW5kVG8odWwpO1xuXHRcdH07XG5cdFx0cmV0dXJuICRlbDtcblx0fVxuXG5cdGZ1bmN0aW9uIG9wZW5fYWRkcmVzc19jb3B5KCl7XG5cdFx0cmV0dXJuICQoYDxhIGhyZWY9XCIjXCI+JHtMT0MuYXV0b2NvbXBsZXRlLmxhYmVsfTwvYT5gKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2hvd19jb3B5KCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBzaG93X29wZW4oKSB7XG5cdFx0JHdyYXBwZXIuZW1wdHkoKS5hcHBlbmQob3Blbl9hZGRyZXNzX2NvcHkoKSk7XG5cdH1cblx0ZnVuY3Rpb24gc2hvd19jb3B5KCkge1xuXHRcdCR3cmFwcGVyLmVtcHR5KCkuYXBwZW5kKGFkZHJlc3NfY29weSgpKTtcblx0fVxuXG5cdHNob3dfb3BlbigpO1xuXG59KShqUXVlcnksIEdlb2xvY2F0aW9uc19NZXRhQm94KTsiXSwic291cmNlUm9vdCI6IiJ9