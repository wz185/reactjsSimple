webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _book_list = __webpack_require__(158);

	var _book_list2 = _interopRequireDefault(_book_list);

	var _book_detail = __webpack_require__(188);

	var _book_detail2 = _interopRequireDefault(_book_detail);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import { store } from 'react-router';


	var App = function (_Component) {
		_inherits(App, _Component);

		function App() {
			_classCallCheck(this, App);

			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_book_list2.default, null),
					_react2.default.createElement(_book_detail2.default, null)
				);
			}
		}]);

		return App;
	}(_react.Component);

	exports.default = App;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	var _index = __webpack_require__(187);

	var _index2 = _interopRequireDefault(_index);

	var _redux = __webpack_require__(166);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookList = function (_Component) {
		_inherits(BookList, _Component);

		function BookList() {
			_classCallCheck(this, BookList);

			return _possibleConstructorReturn(this, (BookList.__proto__ || Object.getPrototypeOf(BookList)).apply(this, arguments));
		}

		_createClass(BookList, [{
			key: 'renderList',
			value: function renderList() {
				var _this2 = this;

				return this.props.books.map(function (book) {
					return _react2.default.createElement(
						'li',
						{
							key: book.title,
							className: 'list-group-item',
							onClick: function onClick() {
								_this2.props.selectBook(book);
							} },
						book.title
					);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: 'list-group col-sm-4' },
					this.renderList()
				);
			}
		}]);

		return BookList;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			books: state.books
		};
	}

	function mapDispatchToProps(dispatch) {
		return {
			selectBook: (0, _redux.bindActionCreators)(_index2.default, dispatch)
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BookList);

/***/ },

/***/ 187:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = selectBook;
	function selectBook(book) {
		return {
			type: 'BOOK_SELECTED',
			payload: book
		};
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(159);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BookDetail = function (_Component) {
		_inherits(BookDetail, _Component);

		function BookDetail() {
			_classCallCheck(this, BookDetail);

			return _possibleConstructorReturn(this, (BookDetail.__proto__ || Object.getPrototypeOf(BookDetail)).apply(this, arguments));
		}

		_createClass(BookDetail, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						null,
						this.props.activeBook.title
					)
				);
			}
		}]);

		return BookDetail;
	}(_react.Component);

	function mapStateToProps(state) {
		return {
			activeBook: state.activeBook
		};
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(BookDetail);

/***/ }

});