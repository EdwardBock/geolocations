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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/tinymce-plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/tinymce-plugin.js":
/*!**************************************!*\
  !*** ./src/script/tinymce-plugin.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  'use strict';

  if ((typeof tinymce === "undefined" ? "undefined" : _typeof(tinymce)) !== ( true ? "undefined" : undefined)) {
    /**
     * Add plugin to tinymce editor
     */
    tinymce.PluginManager.add('geolocations', function (editor, url) {
      var TEXT = window.geolocations.text;
      var TAXONOMIES = window.geolocations.taxonomies;
      $("body").on("change", ".geolocations-dialog input", function () {
        var $this = $(this);

        if ($this.attr("name") === "single") {
          if ($this.is(":checked")) {
            $("[data-geolocations-single='0']").hide();
            $("[data-geolocations-single='1']").show();
          } else {
            $("[data-geolocations-single='1']").hide();
            $("[data-geolocations-single='0']").show();
          }
        }
      });
      /**
       * start edit postqueue if node is postqueue node
       * @param node
       */

      function editItem(node) {
        var data;

        if (node.nodeName !== 'DIV' || !editor.dom.hasClass(node, 'geolocations')) {
          return;
        }

        data = window.decodeURIComponent(editor.dom.getAttrib(node, 'data-geolocations')); // Make sure we've selected a postqueue node.

        if (editor.dom.hasClass(node, 'geolocations')) {
          openEditor(node);
        }
      }
      /**
       * open editor for postqueue
       * @param node
       */


      function openEditor(node) {
        var single, taxonomy, terms, address, address_id;
        /**
         * collect data
         */

        if (_typeof(node) !== ( true ? "undefined" : undefined)) {
          single = node.getAttribute("data-single");

          if (_typeof(single) === ( true ? "undefined" : undefined) || !single) {
            single = false;
          } else {
            single = true;
          }

          taxonomy = "";
          terms = "";

          for (var i = 0; i < node.attributes.length; i++) {
            var att = node.attributes[i];
            var name = att.nodeName;

            if (name.indexOf("data-tax_") === 0) {
              terms = node.getAttribute(name);
              taxonomy = name.replace("data-tax_", "");
            }
          }

          var address_node = node.getAttribute("data-address");
          var address_id_node = node.getAttribute("data-id");
          address = _typeof(address_node) === _typeof("") ? address_node : "";
          address_id = _typeof(address_id_node) === _typeof("") ? address_id_node : "";
        }
        /**
         * autocomplete select event
         * @param event
         * @param ui
         * @return {boolean}
         */


        function on_autocomplete_select(event, ui) {
          var item = ui.item;
          address_id = item.ID;
          $(this).val(item.post_title);
          return false;
        }
        /*
         * open the editor overlay
         */


        var win = editor.windowManager.open({
          title: "Geolocations",
          html: "\n<div class=\"geolocations-dialog\" >\n\t\n\t<div class=\"geolocations-dialog__field\">\n\t\t<label><input id=\"geolocations-single\" type=\"checkbox\" name=\"single\" ".concat(single ? "checked" : "", " /> ").concat(TEXT.single_text, "</label>\n\t</div>\n\t\n\t<div data-geolocations-single=\"0\">\n\t\t<div class=\"geolocations-dialog__field\">\n\t\t\t<label><span class=\"geolocations-dialog__label--text\">").concat(TEXT.taxonomy, "</span><br>\n\t\t\t\t<select id=\"geolocations-taxonomy\" class=\"geolocations-dialog__select\">\n\t\t\t\t\t").concat(TAXONOMIES.map(function (tax) {
            return "<option value=\"".concat(tax.value, "\" ").concat(tax.value === taxonomy ? "selected" : "", ">").concat(tax.text, "</option>");
          }).join(""), "\n\t\t\t\t</select>\n\t\t\t</label>\n\t\t</div>\n\t\t<div class=\"geolocations-dialog__field\">\n\t\t\t<label>\n\t\t\t\t<span class=\"geolocations-dialog__label--text\">").concat(TEXT.terms, "</span><br>\n\t\t\t\t<small>").concat(TEXT.terms_tooltip, "</small><br>\n\t\t\t\t<input id=\"geolocations-terms\" type=\"text\" value=\"").concat(terms, "\" />\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\t\n\t<div data-geolocations-single=\"1\">\n\t\t<div class=\"geolocations-dialog__field\">\n\t\t\t<label>\n\t\t\t\t<span class=\"geolocations-dialog__label--text\">").concat(TEXT.address_label, "</span><br>\n\t\t\t\t<span class=\"geolocations-dialog__description\">").concat(TEXT.address_tooltip, "</span><br>\n\t\t\t\t<input id=\"geolocations-address\" type=\"text\" value=\"").concat(address, "\" /><br>\n\t\t\t\t<div id=\"geolocations-address__list\"></div>\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\t\n</div>\n"),
          height: 320,
          width: 340,
          buttons: [{
            text: 'Ok',
            subtype: 'primary',
            onclick: function onclick() {
              var $single = $("#geolocations-single");
              var $address = $("#geolocations-address");
              var $taxonomy = $("#geolocations-taxonomy");
              var $terms = $("#geolocations-terms");
              var _single = "";

              if ($single.is(":checked")) {
                _single = "single=\"true\"";
              }

              var _tax = "";
              var _address = "";

              if (_single === '') {
                if ($taxonomy.length && $taxonomy.val() !== '' && $terms.length && $terms.val() !== '') {
                  _tax = "tax_".concat($taxonomy.val(), "=\"").concat($terms.val().replace(" ", ""), "\"");
                }
              } else if (address_id !== '' && $address.val() !== '') {
                _address = "address=\"".concat($address.val(), "\" id=\"").concat(address_id, "\"");
              }

              editor.insertContent("[geolocations_map ".concat(_single, " ").concat(_address, " ").concat(_tax, "]"));
              win.close();
            }
          }, {
            text: 'Close',
            onclick: function onclick() {
              win.close();
            }
          }]
        });
        setTimeout(function () {
          $("#geolocations-single").trigger("change");

          $("#geolocations-address").autocomplete({
            source: ajaxurl + "?action=geolocations_admin",
            minLength: 3,
            select: on_autocomplete_select,
            appendTo: "#geolocations-address__list"
          }).autocomplete("instance")._renderItem = function (ul, item) {
            return $("<li class='geolocations-dialog__address-item'>").append("<span class=\"geolocations-dialog__address-item--title\">".concat(item.post_title, "</span>\n<span class='geolocations-dialog__address-item--id' >ID: ").concat(item.ID, "</span>\n<span class=\"geolocations-dialog__address-item--info\">").concat(item.address, "</span>")).appendTo(ul);
          };
        }, 300);
      }
      /**
       * check mouseup in editor
       */


      editor.on('mouseup', function (event) {
        var dom = editor.dom,
            node = event.target;

        function unselect() {
          dom.removeClass(dom.select('div.geolocations'), 'geolocations-selected');
        }

        if (node.nodeName === 'DIV' && dom.getAttrib(node, 'data-geolocations')) {
          // Don't trigger on right-click
          if (event.button !== 2) {
            if (dom.hasClass(node, 'geolocations-selected')) {
              editItem(node);
            } else {
              unselect();
              dom.addClass(node, 'geolocations-selected');
            }
          }
        } else {
          unselect();
        }
      }); // Display gallery, audio or video instead of img in the element path

      editor.on('ResolveName', function (event) {
        var dom = editor.dom,
            node = event.target;

        if (node.nodeName === 'DIV' && dom.getAttrib(node, 'data-geolocations')) {
          if (dom.hasClass(node, 'geolocations')) {
            event.name = 'geolocations';
          }
        }
      });
      /**
       * init the postqueue tinymce items
       */

      editor.on('preInit', function () {
        function hasPostqueueClass(node) {
          var className = node.attr('class');
          return className && /\bgeolocations\b/.test(className);
        }

        function toggleContentEditableState(state) {
          return function (nodes) {
            var i = nodes.length,
                node;

            function toggleContentEditable(node) {
              node.attr('contenteditable', state ? 'true' : null);
            }

            while (i--) {
              node = nodes[i];

              if (hasPostqueueClass(node)) {
                node.attr('contenteditable', state ? 'false' : null); // tinymce.each(node.getAll('figcaption'), toggleContentEditable);
              }
            }
          };
        }

        editor.parser.addNodeFilter('div', toggleContentEditableState(true));
        editor.serializer.addNodeFilter('div', toggleContentEditableState(false));
      });
      /**
       * replace shortcode by html representation for tinymce
       */

      editor.on('BeforeSetContent', function (event) {
        event.content = event.content.replace(/\[geolocations_map([^\]]*)\]/g, function (match, attrs) {
          var found = [];
          var data = [];
          var regex = /(tax_)?([\w\-_]+)="([^"]+)"/g;
          var m;

          while ((m = regex.exec(attrs)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
              regex.lastIndex++;
            }

            var _attr = m[2];

            if (m[1]) {
              for (var i = 0; i < TAXONOMIES.length; i++) {
                var t = TAXONOMIES[i];

                if (_attr === t.value) {
                  _attr = t.text;
                  break;
                }
              }
            }

            found.push("<b>".concat(_attr, ":</b> ").concat(m[3]));
            data.push("data-".concat(m[2], "=\"").concat(m[3], "\""));
          }

          return '<div data-geolocations="' + window.encodeURIComponent(match) + '" ' + data.join(" ") + ' class="geolocations">' + '<span class="geolocations__title">Geolocations</span><br/>' + found.join(" <br/> ") + '<!--geolocations--></div>';
        });
      });
      /**
       * restore shortcode from html
       */

      editor.on('PostProcess', function (event) {
        if (event.get) {
          event.content = event.content.replace(/<div[^>]+?data-geolocations="([^"]*?)".+?<!--geolocations--><\/div>/gi, function (match, data) {
            return "<p>" + window.decodeURIComponent(data) + "</p>";
          });
        }
      });
      /**
       * Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('...');
       */

      editor.addCommand('Geolocations', function () {
        editItem(editor.selection.getNode());
      });
      /**
       * add button to editor
       */

      editor.addButton('geolocations', {
        // text: 'Termine',
        title: "Geolocations",
        // image: url+'/../images/icon.png',
        icon: 'icon dashicons-before dashicons-location-alt',
        onclick: function onclick() {
          /**
           * opens jquery dialog
           */
          openEditor(editor.selection.getNode());
        }
      });
    });
  }
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC90aW55bWNlLXBsdWdpbi5qcyJdLCJuYW1lcyI6WyIkIiwidGlueW1jZSIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJlZGl0b3IiLCJ1cmwiLCJURVhUIiwid2luZG93IiwiZ2VvbG9jYXRpb25zIiwidGV4dCIsIlRBWE9OT01JRVMiLCJ0YXhvbm9taWVzIiwib24iLCIkdGhpcyIsImF0dHIiLCJpcyIsImhpZGUiLCJzaG93IiwiZWRpdEl0ZW0iLCJub2RlIiwiZGF0YSIsIm5vZGVOYW1lIiwiZG9tIiwiaGFzQ2xhc3MiLCJkZWNvZGVVUklDb21wb25lbnQiLCJnZXRBdHRyaWIiLCJvcGVuRWRpdG9yIiwic2luZ2xlIiwidGF4b25vbXkiLCJ0ZXJtcyIsImFkZHJlc3MiLCJhZGRyZXNzX2lkIiwiZ2V0QXR0cmlidXRlIiwiaSIsImF0dHJpYnV0ZXMiLCJsZW5ndGgiLCJhdHQiLCJuYW1lIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJhZGRyZXNzX25vZGUiLCJhZGRyZXNzX2lkX25vZGUiLCJvbl9hdXRvY29tcGxldGVfc2VsZWN0IiwiZXZlbnQiLCJ1aSIsIml0ZW0iLCJJRCIsInZhbCIsInBvc3RfdGl0bGUiLCJ3aW4iLCJ3aW5kb3dNYW5hZ2VyIiwib3BlbiIsInRpdGxlIiwiaHRtbCIsInNpbmdsZV90ZXh0IiwibWFwIiwidGF4IiwidmFsdWUiLCJqb2luIiwidGVybXNfdG9vbHRpcCIsImFkZHJlc3NfbGFiZWwiLCJhZGRyZXNzX3Rvb2x0aXAiLCJoZWlnaHQiLCJ3aWR0aCIsImJ1dHRvbnMiLCJzdWJ0eXBlIiwib25jbGljayIsIiRzaW5nbGUiLCIkYWRkcmVzcyIsIiR0YXhvbm9teSIsIiR0ZXJtcyIsIl9zaW5nbGUiLCJfdGF4IiwiX2FkZHJlc3MiLCJpbnNlcnRDb250ZW50IiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwidHJpZ2dlciIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsImFqYXh1cmwiLCJtaW5MZW5ndGgiLCJzZWxlY3QiLCJhcHBlbmRUbyIsIl9yZW5kZXJJdGVtIiwidWwiLCJhcHBlbmQiLCJ0YXJnZXQiLCJ1bnNlbGVjdCIsInJlbW92ZUNsYXNzIiwiYnV0dG9uIiwiYWRkQ2xhc3MiLCJoYXNQb3N0cXVldWVDbGFzcyIsImNsYXNzTmFtZSIsInRlc3QiLCJ0b2dnbGVDb250ZW50RWRpdGFibGVTdGF0ZSIsInN0YXRlIiwibm9kZXMiLCJ0b2dnbGVDb250ZW50RWRpdGFibGUiLCJwYXJzZXIiLCJhZGROb2RlRmlsdGVyIiwic2VyaWFsaXplciIsImNvbnRlbnQiLCJtYXRjaCIsImF0dHJzIiwiZm91bmQiLCJyZWdleCIsIm0iLCJleGVjIiwiaW5kZXgiLCJsYXN0SW5kZXgiLCJfYXR0ciIsInQiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0IiwiYWRkQ29tbWFuZCIsInNlbGVjdGlvbiIsImdldE5vZGUiLCJhZGRCdXR0b24iLCJpY29uIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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QztBQUNBbkUsYUFBSyxFQUFFLGNBRnlCO0FBR2hDO0FBQ0FvRSxZQUFJLEVBQUUsOENBSjBCO0FBS2hDdEQsZUFBTyxFQUFFLG1CQUFXO0FBQ25COzs7QUFHQXhDLG9CQUFVLENBQUN0QixNQUFNLENBQUNpSCxTQUFQLENBQWlCQyxPQUFqQixFQUFELENBQVY7QUFDQTtBQVYrQixPQUFqQztBQWFBLEtBeFZEO0FBMFZBO0FBRUQsQ0FwV0QsRUFvV0lHLE1BcFdKLEUiLCJmaWxlIjoidGlueW1jZV9wbHVnaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHQvdGlueW1jZS1wbHVnaW4uanNcIik7XG4iLCIoZnVuY3Rpb24oICQgKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHRpZiAodHlwZW9mIHRpbnltY2UgIT09IHR5cGVvZiB1bmRlZmluZWQpe1xuXG5cdFx0LyoqXG5cdFx0ICogQWRkIHBsdWdpbiB0byB0aW55bWNlIGVkaXRvclxuXHRcdCAqL1xuXHRcdHRpbnltY2UuUGx1Z2luTWFuYWdlci5hZGQoJ2dlb2xvY2F0aW9ucycsIGZ1bmN0aW9uKCBlZGl0b3IsIHVybCApIHtcblxuXHRcdFx0Y29uc3QgVEVYVCA9IHdpbmRvdy5nZW9sb2NhdGlvbnMudGV4dDtcblx0XHRcdGNvbnN0IFRBWE9OT01JRVMgPSB3aW5kb3cuZ2VvbG9jYXRpb25zLnRheG9ub21pZXM7XG5cblx0XHRcdCQoXCJib2R5XCIpLm9uKFwiY2hhbmdlXCIsIFwiLmdlb2xvY2F0aW9ucy1kaWFsb2cgaW5wdXRcIixmdW5jdGlvbigpe1xuXHRcdFx0XHRjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cdFx0XHRcdGlmKCR0aGlzLmF0dHIoXCJuYW1lXCIpID09PSBcInNpbmdsZVwiKXtcblx0XHRcdFx0XHRpZigkdGhpcy5pcyhcIjpjaGVja2VkXCIpKXtcblx0XHRcdFx0XHRcdCQoXCJbZGF0YS1nZW9sb2NhdGlvbnMtc2luZ2xlPScwJ11cIikuaGlkZSgpO1xuXHRcdFx0XHRcdFx0JChcIltkYXRhLWdlb2xvY2F0aW9ucy1zaW5nbGU9JzEnXVwiKS5zaG93KCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCQoXCJbZGF0YS1nZW9sb2NhdGlvbnMtc2luZ2xlPScxJ11cIikuaGlkZSgpO1xuXHRcdFx0XHRcdFx0JChcIltkYXRhLWdlb2xvY2F0aW9ucy1zaW5nbGU9JzAnXVwiKS5zaG93KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBzdGFydCBlZGl0IHBvc3RxdWV1ZSBpZiBub2RlIGlzIHBvc3RxdWV1ZSBub2RlXG5cdFx0XHQgKiBAcGFyYW0gbm9kZVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBlZGl0SXRlbSggbm9kZSApIHtcblx0XHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdFx0aWYgKCBub2RlLm5vZGVOYW1lICE9PSAnRElWJyB8fCAhZWRpdG9yLmRvbS5oYXNDbGFzcyggbm9kZSwgJ2dlb2xvY2F0aW9ucycgKSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkYXRhID0gd2luZG93LmRlY29kZVVSSUNvbXBvbmVudCggZWRpdG9yLmRvbS5nZXRBdHRyaWIoIG5vZGUsICdkYXRhLWdlb2xvY2F0aW9ucycgKSApO1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSd2ZSBzZWxlY3RlZCBhIHBvc3RxdWV1ZSBub2RlLlxuXHRcdFx0XHRpZiAoIGVkaXRvci5kb20uaGFzQ2xhc3MoIG5vZGUsICdnZW9sb2NhdGlvbnMnICkgKSB7XG5cdFx0XHRcdFx0b3BlbkVkaXRvcihub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKipcblx0XHRcdCAqIG9wZW4gZWRpdG9yIGZvciBwb3N0cXVldWVcblx0XHRcdCAqIEBwYXJhbSBub2RlXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIG9wZW5FZGl0b3Iobm9kZSl7XG5cblx0XHRcdFx0bGV0IHNpbmdsZSwgdGF4b25vbXksIHRlcm1zLCBhZGRyZXNzLCBhZGRyZXNzX2lkO1xuXG5cdFx0XHRcdC8qKlxuXHRcdFx0XHQgKiBjb2xsZWN0IGRhdGFcblx0XHRcdFx0ICovXG5cdFx0XHRcdGlmKHR5cGVvZiBub2RlICE9PSB0eXBlb2YgdW5kZWZpbmVkKXtcblx0XHRcdFx0XHRzaW5nbGUgPSBub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtc2luZ2xlXCIpO1xuXG5cdFx0XHRcdFx0aWYodHlwZW9mIHNpbmdsZSA9PT0gdHlwZW9mIHVuZGVmaW5lZCB8fCAhc2luZ2xlKXtcblx0XHRcdFx0XHRcdHNpbmdsZSA9IGZhbHNlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzaW5nbGUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRheG9ub215ID0gXCJcIjtcblx0XHRcdFx0XHR0ZXJtcyA9IFwiXCI7XG5cdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IG5vZGUuYXR0cmlidXRlcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0XHRsZXQgYXR0ID0gbm9kZS5hdHRyaWJ1dGVzW2ldO1xuXHRcdFx0XHRcdFx0bGV0IG5hbWUgPSBhdHQubm9kZU5hbWU7XG5cdFx0XHRcdFx0XHRpZihuYW1lLmluZGV4T2YoXCJkYXRhLXRheF9cIikgPT09IDApe1xuXHRcdFx0XHRcdFx0XHR0ZXJtcyA9IG5vZGUuZ2V0QXR0cmlidXRlKG5hbWUpO1xuXHRcdFx0XHRcdFx0XHR0YXhvbm9teSA9IG5hbWUucmVwbGFjZShcImRhdGEtdGF4X1wiLFwiXCIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0IGFkZHJlc3Nfbm9kZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hZGRyZXNzXCIpO1xuXHRcdFx0XHRcdGNvbnN0IGFkZHJlc3NfaWRfbm9kZSA9IG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuXHRcdFx0XHRcdGFkZHJlc3MgPSAodHlwZW9mIGFkZHJlc3Nfbm9kZSA9PT0gdHlwZW9mIFwiXCIpPyBhZGRyZXNzX25vZGU6IFwiXCI7XG5cdFx0XHRcdFx0YWRkcmVzc19pZCA9ICh0eXBlb2YgYWRkcmVzc19pZF9ub2RlID09PSB0eXBlb2YgXCJcIik/IGFkZHJlc3NfaWRfbm9kZSA6IFwiXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKipcblx0XHRcdFx0ICogYXV0b2NvbXBsZXRlIHNlbGVjdCBldmVudFxuXHRcdFx0XHQgKiBAcGFyYW0gZXZlbnRcblx0XHRcdFx0ICogQHBhcmFtIHVpXG5cdFx0XHRcdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdFx0XHRcdCAqL1xuXHRcdFx0XHRmdW5jdGlvbiBvbl9hdXRvY29tcGxldGVfc2VsZWN0KGV2ZW50LCB1aSl7XG5cdFx0XHRcdFx0Y29uc3Qge2l0ZW19ID0gdWk7XG5cdFx0XHRcdFx0YWRkcmVzc19pZCA9IGl0ZW0uSUQ7XG5cdFx0XHRcdFx0JCh0aGlzKS52YWwoaXRlbS5wb3N0X3RpdGxlKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvKlxuXHRcdFx0XHQgKiBvcGVuIHRoZSBlZGl0b3Igb3ZlcmxheVxuXHRcdFx0XHQgKi9cblx0XHRcdFx0dmFyIHdpbiA9IGVkaXRvci53aW5kb3dNYW5hZ2VyLm9wZW4oe1xuXHRcdFx0XHRcdHRpdGxlOiBcIkdlb2xvY2F0aW9uc1wiLFxuXHRcdFx0XHRcdGh0bWw6ICBgXG48ZGl2IGNsYXNzPVwiZ2VvbG9jYXRpb25zLWRpYWxvZ1wiID5cblx0XG5cdDxkaXYgY2xhc3M9XCJnZW9sb2NhdGlvbnMtZGlhbG9nX19maWVsZFwiPlxuXHRcdDxsYWJlbD48aW5wdXQgaWQ9XCJnZW9sb2NhdGlvbnMtc2luZ2xlXCIgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInNpbmdsZVwiICR7KHNpbmdsZSk/XCJjaGVja2VkXCI6XCJcIn0gLz4gJHtURVhULnNpbmdsZV90ZXh0fTwvbGFiZWw+XG5cdDwvZGl2PlxuXHRcblx0PGRpdiBkYXRhLWdlb2xvY2F0aW9ucy1zaW5nbGU9XCIwXCI+XG5cdFx0PGRpdiBjbGFzcz1cImdlb2xvY2F0aW9ucy1kaWFsb2dfX2ZpZWxkXCI+XG5cdFx0XHQ8bGFiZWw+PHNwYW4gY2xhc3M9XCJnZW9sb2NhdGlvbnMtZGlhbG9nX19sYWJlbC0tdGV4dFwiPiR7VEVYVC50YXhvbm9teX08L3NwYW4+PGJyPlxuXHRcdFx0XHQ8c2VsZWN0IGlkPVwiZ2VvbG9jYXRpb25zLXRheG9ub215XCIgY2xhc3M9XCJnZW9sb2NhdGlvbnMtZGlhbG9nX19zZWxlY3RcIj5cblx0XHRcdFx0XHQke1RBWE9OT01JRVMubWFwKCh0YXgpPT57XG5cdFx0XHRcdFx0XHRyZXR1cm4gYDxvcHRpb24gdmFsdWU9XCIke3RheC52YWx1ZX1cIiAkeyh0YXgudmFsdWUgPT09IHRheG9ub215KT9cInNlbGVjdGVkXCI6XCJcIn0+JHt0YXgudGV4dH08L29wdGlvbj5gO1xuXHRcdFx0XHRcdFx0XHR9KS5qb2luKFwiXCIpfVxuXHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdDwvbGFiZWw+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImdlb2xvY2F0aW9ucy1kaWFsb2dfX2ZpZWxkXCI+XG5cdFx0XHQ8bGFiZWw+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2VvbG9jYXRpb25zLWRpYWxvZ19fbGFiZWwtLXRleHRcIj4ke1RFWFQudGVybXN9PC9zcGFuPjxicj5cblx0XHRcdFx0PHNtYWxsPiR7VEVYVC50ZXJtc190b29sdGlwfTwvc21hbGw+PGJyPlxuXHRcdFx0XHQ8aW5wdXQgaWQ9XCJnZW9sb2NhdGlvbnMtdGVybXNcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0ZXJtc31cIiAvPlxuXHRcdFx0PC9sYWJlbD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cdFxuXHQ8ZGl2IGRhdGEtZ2VvbG9jYXRpb25zLXNpbmdsZT1cIjFcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2VvbG9jYXRpb25zLWRpYWxvZ19fZmllbGRcIj5cblx0XHRcdDxsYWJlbD5cblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJnZW9sb2NhdGlvbnMtZGlhbG9nX19sYWJlbC0tdGV4dFwiPiR7VEVYVC5hZGRyZXNzX2xhYmVsfTwvc3Bhbj48YnI+XG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwiZ2VvbG9jYXRpb25zLWRpYWxvZ19fZGVzY3JpcHRpb25cIj4ke1RFWFQuYWRkcmVzc190b29sdGlwfTwvc3Bhbj48YnI+XG5cdFx0XHRcdDxpbnB1dCBpZD1cImdlb2xvY2F0aW9ucy1hZGRyZXNzXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7YWRkcmVzc31cIiAvPjxicj5cblx0XHRcdFx0PGRpdiBpZD1cImdlb2xvY2F0aW9ucy1hZGRyZXNzX19saXN0XCI+PC9kaXY+XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblx0XG48L2Rpdj5cbmAsXG5cdFx0XHRcdFx0aGVpZ2h0OiAzMjAsXG5cdFx0XHRcdFx0d2lkdGg6IDM0MCxcblx0XHRcdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6ICdPaycsXG5cdFx0XHRcdFx0XHRcdHN1YnR5cGU6ICdwcmltYXJ5Jyxcblx0XHRcdFx0XHRcdFx0b25jbGljazogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkc2luZ2xlID0gJChcIiNnZW9sb2NhdGlvbnMtc2luZ2xlXCIpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0ICRhZGRyZXNzID0gJChcIiNnZW9sb2NhdGlvbnMtYWRkcmVzc1wiKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkdGF4b25vbXkgPSAkKFwiI2dlb2xvY2F0aW9ucy10YXhvbm9teVwiKTtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCAkdGVybXMgPSAkKFwiI2dlb2xvY2F0aW9ucy10ZXJtc1wiKTtcblxuXHRcdFx0XHRcdFx0XHRcdGxldCBfc2luZ2xlID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRpZigkc2luZ2xlLmlzKFwiOmNoZWNrZWRcIikpe1xuXHRcdFx0XHRcdFx0XHRcdFx0X3NpbmdsZSA9IFwic2luZ2xlPVxcXCJ0cnVlXFxcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGxldCBfdGF4ID0gXCJcIjtcblx0XHRcdFx0XHRcdFx0XHRsZXQgX2FkZHJlc3MgPSBcIlwiO1xuXHRcdFx0XHRcdFx0XHRcdGlmKF9zaW5nbGUgPT09ICcnKXtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKCR0YXhvbm9teS5sZW5ndGggJiYgJHRheG9ub215LnZhbCgpICE9PSAnJyAmJiAkdGVybXMubGVuZ3RoICYmICR0ZXJtcy52YWwoKSAhPT0gJycpe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRfdGF4ID0gYHRheF8keyR0YXhvbm9teS52YWwoKX09XCIkeyR0ZXJtcy52YWwoKS5yZXBsYWNlKFwiIFwiLFwiXCIpfVwiYDtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYoIGFkZHJlc3NfaWQgIT09ICcnICYmICRhZGRyZXNzLnZhbCgpICE9PSAnJyl7XG5cdFx0XHRcdFx0XHRcdFx0XHRfYWRkcmVzcz1gYWRkcmVzcz1cIiR7JGFkZHJlc3MudmFsKCl9XCIgaWQ9XCIke2FkZHJlc3NfaWR9XCJgXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0ZWRpdG9yLmluc2VydENvbnRlbnQoYFtnZW9sb2NhdGlvbnNfbWFwICR7X3NpbmdsZX0gJHtfYWRkcmVzc30gJHtfdGF4fV1gKTtcblx0XHRcdFx0XHRcdFx0XHR3aW4uY2xvc2UoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogJ0Nsb3NlJyxcblx0XHRcdFx0XHRcdFx0b25jbGljazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0d2luLmNsb3NlKCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xuXHRcdFx0XHRcdCQoXCIjZ2VvbG9jYXRpb25zLXNpbmdsZVwiKS50cmlnZ2VyKFwiY2hhbmdlXCIpO1xuXHRcdFx0XHRcdCQoXCIjZ2VvbG9jYXRpb25zLWFkZHJlc3NcIilcblx0XHRcdFx0XHRcdC5hdXRvY29tcGxldGUoe1xuXHRcdFx0XHRcdFx0XHRzb3VyY2U6IGFqYXh1cmwrXCI/YWN0aW9uPWdlb2xvY2F0aW9uc19hZG1pblwiLFxuXHRcdFx0XHRcdFx0XHRtaW5MZW5ndGg6IDMsXG5cdFx0XHRcdFx0XHRcdHNlbGVjdDogb25fYXV0b2NvbXBsZXRlX3NlbGVjdCxcblx0XHRcdFx0XHRcdFx0YXBwZW5kVG86IFwiI2dlb2xvY2F0aW9ucy1hZGRyZXNzX19saXN0XCIsXG5cdFx0XHRcdFx0XHR9KS5hdXRvY29tcGxldGUoIFwiaW5zdGFuY2VcIiApLl9yZW5kZXJJdGVtID0gZnVuY3Rpb24oIHVsLCBpdGVtICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJCggXCI8bGkgY2xhc3M9J2dlb2xvY2F0aW9ucy1kaWFsb2dfX2FkZHJlc3MtaXRlbSc+XCIgKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdGA8c3BhbiBjbGFzcz1cImdlb2xvY2F0aW9ucy1kaWFsb2dfX2FkZHJlc3MtaXRlbS0tdGl0bGVcIj4ke2l0ZW0ucG9zdF90aXRsZX08L3NwYW4+XG48c3BhbiBjbGFzcz0nZ2VvbG9jYXRpb25zLWRpYWxvZ19fYWRkcmVzcy1pdGVtLS1pZCcgPklEOiAke2l0ZW0uSUR9PC9zcGFuPlxuPHNwYW4gY2xhc3M9XCJnZW9sb2NhdGlvbnMtZGlhbG9nX19hZGRyZXNzLWl0ZW0tLWluZm9cIj4ke2l0ZW0uYWRkcmVzc308L3NwYW4+YFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmRUbyggdWwgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fSwzMDApO1xuXG5cblxuXHRcdFx0fVxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogY2hlY2sgbW91c2V1cCBpbiBlZGl0b3Jcblx0XHRcdCAqL1xuXHRcdFx0ZWRpdG9yLm9uKCAnbW91c2V1cCcsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dmFyIGRvbSA9IGVkaXRvci5kb20sXG5cdFx0XHRcdFx0bm9kZSA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0XHRmdW5jdGlvbiB1bnNlbGVjdCgpIHtcblx0XHRcdFx0XHRkb20ucmVtb3ZlQ2xhc3MoIGRvbS5zZWxlY3QoICdkaXYuZ2VvbG9jYXRpb25zJyApLCAnZ2VvbG9jYXRpb25zLXNlbGVjdGVkJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBub2RlLm5vZGVOYW1lID09PSAnRElWJyAmJiBkb20uZ2V0QXR0cmliKCBub2RlLCAnZGF0YS1nZW9sb2NhdGlvbnMnICkgKSB7XG5cdFx0XHRcdFx0Ly8gRG9uJ3QgdHJpZ2dlciBvbiByaWdodC1jbGlja1xuXHRcdFx0XHRcdGlmICggZXZlbnQuYnV0dG9uICE9PSAyICkge1xuXHRcdFx0XHRcdFx0aWYgKCBkb20uaGFzQ2xhc3MoIG5vZGUsICdnZW9sb2NhdGlvbnMtc2VsZWN0ZWQnICkgKSB7XG5cdFx0XHRcdFx0XHRcdGVkaXRJdGVtKCBub2RlICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bnNlbGVjdCgpO1xuXHRcdFx0XHRcdFx0XHRkb20uYWRkQ2xhc3MoIG5vZGUsICdnZW9sb2NhdGlvbnMtc2VsZWN0ZWQnICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVuc2VsZWN0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBEaXNwbGF5IGdhbGxlcnksIGF1ZGlvIG9yIHZpZGVvIGluc3RlYWQgb2YgaW1nIGluIHRoZSBlbGVtZW50IHBhdGhcblx0XHRcdGVkaXRvci5vbiggJ1Jlc29sdmVOYW1lJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR2YXIgZG9tID0gZWRpdG9yLmRvbSxcblx0XHRcdFx0XHRub2RlID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0XHRpZiAoIG5vZGUubm9kZU5hbWUgPT09ICdESVYnICYmIGRvbS5nZXRBdHRyaWIoIG5vZGUsICdkYXRhLWdlb2xvY2F0aW9ucycgKSApIHtcblx0XHRcdFx0XHRpZiAoIGRvbS5oYXNDbGFzcyggbm9kZSwgJ2dlb2xvY2F0aW9ucycgKSApIHtcblx0XHRcdFx0XHRcdGV2ZW50Lm5hbWUgPSAnZ2VvbG9jYXRpb25zJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIGluaXQgdGhlIHBvc3RxdWV1ZSB0aW55bWNlIGl0ZW1zXG5cdFx0XHQgKi9cblx0XHRcdGVkaXRvci5vbigncHJlSW5pdCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRmdW5jdGlvbiBoYXNQb3N0cXVldWVDbGFzcyhub2RlKSB7XG5cdFx0XHRcdFx0dmFyIGNsYXNzTmFtZSA9IG5vZGUuYXR0cignY2xhc3MnKTtcblx0XHRcdFx0XHRyZXR1cm4gY2xhc3NOYW1lICYmIC9cXGJnZW9sb2NhdGlvbnNcXGIvLnRlc3QoY2xhc3NOYW1lKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZ1bmN0aW9uIHRvZ2dsZUNvbnRlbnRFZGl0YWJsZVN0YXRlKHN0YXRlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKG5vZGVzKSB7XG5cdFx0XHRcdFx0XHR2YXIgaSA9IG5vZGVzLmxlbmd0aCwgbm9kZTtcblxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gdG9nZ2xlQ29udGVudEVkaXRhYmxlKG5vZGUpIHtcblx0XHRcdFx0XHRcdFx0bm9kZS5hdHRyKCdjb250ZW50ZWRpdGFibGUnLCBzdGF0ZSA/ICd0cnVlJyA6IG51bGwpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR3aGlsZSAoaS0tKSB7XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBub2Rlc1tpXTtcblxuXHRcdFx0XHRcdFx0XHRpZiAoaGFzUG9zdHF1ZXVlQ2xhc3Mobm9kZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlLmF0dHIoJ2NvbnRlbnRlZGl0YWJsZScsIHN0YXRlID8gJ2ZhbHNlJyA6IG51bGwpO1xuXHRcdFx0XHRcdFx0XHRcdC8vIHRpbnltY2UuZWFjaChub2RlLmdldEFsbCgnZmlnY2FwdGlvbicpLCB0b2dnbGVDb250ZW50RWRpdGFibGUpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVkaXRvci5wYXJzZXIuYWRkTm9kZUZpbHRlcignZGl2JywgdG9nZ2xlQ29udGVudEVkaXRhYmxlU3RhdGUodHJ1ZSkpO1xuXHRcdFx0XHRlZGl0b3Iuc2VyaWFsaXplci5hZGROb2RlRmlsdGVyKCdkaXYnLCB0b2dnbGVDb250ZW50RWRpdGFibGVTdGF0ZShmYWxzZSkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcmVwbGFjZSBzaG9ydGNvZGUgYnkgaHRtbCByZXByZXNlbnRhdGlvbiBmb3IgdGlueW1jZVxuXHRcdFx0ICovXG5cdFx0XHRlZGl0b3Iub24oICdCZWZvcmVTZXRDb250ZW50JywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRldmVudC5jb250ZW50ID0gZXZlbnQuY29udGVudC5yZXBsYWNlKCAvXFxbZ2VvbG9jYXRpb25zX21hcChbXlxcXV0qKVxcXS9nLCBmdW5jdGlvbiggbWF0Y2gsIGF0dHJzICkge1xuXG5cdFx0XHRcdFx0bGV0IGZvdW5kID0gW107XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBbXTtcblxuXHRcdFx0XHRcdGNvbnN0IHJlZ2V4ID0gLyh0YXhfKT8oW1xcd1xcLV9dKyk9XCIoW15cIl0rKVwiL2c7XG5cblx0XHRcdFx0XHRsZXQgbTtcblx0XHRcdFx0XHR3aGlsZSAoKG0gPSByZWdleC5leGVjKGF0dHJzKSkgIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIGluZmluaXRlIGxvb3BzIHdpdGggemVyby13aWR0aCBtYXRjaGVzXG5cdFx0XHRcdFx0XHRpZiAobS5pbmRleCA9PT0gcmVnZXgubGFzdEluZGV4KSB7XG5cdFx0XHRcdFx0XHRcdHJlZ2V4Lmxhc3RJbmRleCsrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRsZXQgX2F0dHIgPSBtWzJdO1xuXG5cdFx0XHRcdFx0XHRpZihtWzFdKXtcblx0XHRcdFx0XHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IFRBWE9OT01JRVMubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRcdFx0XHRcdGxldCB0ID0gVEFYT05PTUlFU1tpXTtcblx0XHRcdFx0XHRcdFx0XHRpZihfYXR0ciA9PT0gdC52YWx1ZSl7XG5cdFx0XHRcdFx0XHRcdFx0XHRfYXR0ciA9IHQudGV4dDtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRmb3VuZC5wdXNoKGA8Yj4ke19hdHRyfTo8L2I+ICR7bVszXX1gKTtcblx0XHRcdFx0XHRcdGRhdGEucHVzaChgZGF0YS0ke21bMl19PVwiJHttWzNdfVwiYCk7XG5cdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0XHRyZXR1cm4gJzxkaXYgZGF0YS1nZW9sb2NhdGlvbnM9XCInK3dpbmRvdy5lbmNvZGVVUklDb21wb25lbnQoIG1hdGNoICkrJ1wiICcgK1xuXHRcdFx0XHRcdFx0ZGF0YS5qb2luKFwiIFwiKSsnIGNsYXNzPVwiZ2VvbG9jYXRpb25zXCI+Jytcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cImdlb2xvY2F0aW9uc19fdGl0bGVcIj5HZW9sb2NhdGlvbnM8L3NwYW4+PGJyLz4nK1xuXHRcdFx0XHRcdFx0Zm91bmQuam9pbihcIiA8YnIvPiBcIikrXG5cdFx0XHRcdFx0XHQnPCEtLWdlb2xvY2F0aW9ucy0tPjwvZGl2Pic7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogcmVzdG9yZSBzaG9ydGNvZGUgZnJvbSBodG1sXG5cdFx0XHQgKi9cblx0XHRcdGVkaXRvci5vbiggJ1Bvc3RQcm9jZXNzJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRpZiAoIGV2ZW50LmdldCApIHtcblx0XHRcdFx0XHRldmVudC5jb250ZW50ID0gZXZlbnQuY29udGVudC5yZXBsYWNlKC88ZGl2W14+XSs/ZGF0YS1nZW9sb2NhdGlvbnM9XCIoW15cIl0qPylcIi4rPzwhLS1nZW9sb2NhdGlvbnMtLT48XFwvZGl2Pi9naSwgZnVuY3Rpb24obWF0Y2gsIGRhdGEpe1xuXHRcdFx0XHRcdFx0cmV0dXJuIFwiPHA+XCIrd2luZG93LmRlY29kZVVSSUNvbXBvbmVudChkYXRhKStcIjwvcD5cIjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBSZWdpc3RlciB0aGUgY29tbWFuZCBzbyB0aGF0IGl0IGNhbiBiZSBpbnZva2VkIGJ5IHVzaW5nIHRpbnlNQ0UuYWN0aXZlRWRpdG9yLmV4ZWNDb21tYW5kKCcuLi4nKTtcblx0XHRcdCAqL1xuXHRcdFx0ZWRpdG9yLmFkZENvbW1hbmQoICdHZW9sb2NhdGlvbnMnLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZWRpdEl0ZW0oIGVkaXRvci5zZWxlY3Rpb24uZ2V0Tm9kZSgpICk7XG5cdFx0XHR9KTtcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBhZGQgYnV0dG9uIHRvIGVkaXRvclxuXHRcdFx0ICovXG5cdFx0XHRlZGl0b3IuYWRkQnV0dG9uKCdnZW9sb2NhdGlvbnMnLCB7XG5cdFx0XHRcdC8vIHRleHQ6ICdUZXJtaW5lJyxcblx0XHRcdFx0dGl0bGU6IFwiR2VvbG9jYXRpb25zXCIsXG5cdFx0XHRcdC8vIGltYWdlOiB1cmwrJy8uLi9pbWFnZXMvaWNvbi5wbmcnLFxuXHRcdFx0XHRpY29uOiAnaWNvbiBkYXNoaWNvbnMtYmVmb3JlIGRhc2hpY29ucy1sb2NhdGlvbi1hbHQnLFxuXHRcdFx0XHRvbmNsaWNrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQvKipcblx0XHRcdFx0XHQgKiBvcGVucyBqcXVlcnkgZGlhbG9nXG5cdFx0XHRcdFx0ICovXG5cdFx0XHRcdFx0b3BlbkVkaXRvcihlZGl0b3Iuc2VsZWN0aW9uLmdldE5vZGUoKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0fSk7XG5cblx0fVxuXG59KSggalF1ZXJ5ICk7Il0sInNvdXJjZVJvb3QiOiIifQ==