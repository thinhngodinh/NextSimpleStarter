import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form'
import userActions from '../actions/userActions'

const validatePhone = (strPhone) => {
	const trimUnicode = (str) => {
		// Chuyển hết sang chữ thường
		str = str.trim();
		str = str.toLowerCase();
		// xóa dấu
		str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
		str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
		str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
		str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
		str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
		str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
		str = str.replace(/(đ)/g, 'd');

		// Xóa ký tự đặc biệt
		str = str.replace(/([^0-9a-z-\s])/g, '');
		str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|\-|~|$|_/g, '');

		// Xóa khoảng trắng thay bằng ký tự -
		str = str.replace(/(\s+)/g, '-');
		//
		str = str.replace(/-+-/g, '-'); // thay thế 2- thành 1-
		// str = str.replace(/-/g, ''); // thay thế - thành ''

		// xóa phần dự - ở đầu
		str = str.replace(/^-+/g, '');

		// xóa phần dư - ở cuối
		str = str.replace(/-+$/g, '');

		// return
		return str;
	};
	const arrayPhone = ['09', '03', '07', '08', '05'];
	const phoneFormat = trimUnicode(`${strPhone}`);
	const strFirt = phoneFormat.slice(0, 2);
	return (arrayPhone.includes(strFirt) && (phoneFormat.length === 10)) ? true : false;
};

const RenderField = ({
	input,
	label,
	type,
	meta: { touched, error, warning }
}) => (
		<React.Fragment>
			<label>{label}</label>
			<div className={`field ${(error && touched) ? 'error' : ''}`}>
				<input {...input} placeholder={label} type={type} />
				{touched &&
					((error && <span className='error-message'>{error}</span>) ||
						(warning && <span className='warning'>{warning}</span>))}
			</div>
		</React.Fragment>
	)

const validate = values => {
	const errors = {}
	if (!values.fullname) {
		errors.fullname = 'Vui lòng nhập Họ Tên'
	}
	if (!values.phone) {
		errors.phone = 'Vui lòng nhập Số Điện Thoại'
	} else if (!validatePhone(values.phone || '')) {
		errors.phone = 'Số Điện Thoại không hợp lệ'
	}

	if (!values.email) {
		errors.email = 'Vui lòng nhập email'
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Email không hợp lệ'
	}

	return errors
}


class RegisterForm extends React.Component {
	constructor(props) {
		super(props)
		this.resetForm = this.resetForm.bind(this)
	}

	resetForm(e) {
		this.props.reset()
		this.props.dispatch(userActions.registerNew.invoke())
	}

	render() {
		const { handleSubmit, isRegister, registerError, registerErrorMsg, fullname, toggleModal } = this.props
		return (
			<div className='modal-container'>
				<a href='javascript:;' className='closebtn' onClick={toggleModal}></a>
				{!isRegister && <img src='/static/img/modal_title_register.png' className='modal-title' />}
				{isRegister && <img src='/static/img/modal_title_thong_bao.png' className='modal-title' />}
				<div className='modal-content'>
					<div className='registerForm'>
						<div className='loading' />
						{isRegister &&
							<div className='resp'>
								{registerError && <p className='message'>
									{registerErrorMsg}<br />Vui lòng thử lại.<br /> <br />
									<button
										onClick={this.resetForm}
										className='button-ok'></button>
								</p>}
								{!registerError && <p className='message'>
									<span className='register-name'>{fullname}</span> đã lưu danh đoạt bảo thành công.
									Mời <span className='register-name'>{fullname}</span> tiếp tục khám phá các tính năng
									đặc sắc của game nhé <br /><br />
									<button
										onClick={toggleModal}
										className='button-ok'></button>
									</p>}
							</div>
						}
						{!isRegister &&
							<Form onSubmit={handleSubmit}>
								<div className='formfield'>
									<Field name='fullname' type='text' component={RenderField} label='Họ Tên' placeholder='Họ Tên' />
								</div>
								<div className='formfield'>
									<Field name='phone' type='text' component={RenderField} label='Số Điện Thoại' placeholder='Số Điện Thoại' />
								</div>
								<div className='formfield'>
									<Field name='email' type='text' component={RenderField} label='Email' placeholder='Email' />
								</div>
								<div className='formfield'>
									<button
										type='submit'
										className='button-ok'></button>
								</div>
							</Form>
						}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProp = (state) => ({
	isRegister: state.user.isRegister,
	registerError: state.user.registerError,
	registerErrorMsg: state.user.registerErrorMsg,
	fullname: state.user.fullname
})

export default compose(
	reduxForm({
		form: 'register',
		validate,
		onSubmit: (values, dispatch) => {
			dispatch(userActions.register.invoke())
		}
	}),
	connect(mapStateToProp)
)(RegisterForm)
