import React from 'react'
import {compose} from 'redux';
import {connect} from 'react-redux';
import { Form, Field, reduxForm } from 'redux-form'
import userActions from '../actions/userActions'

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
		const {handleSubmit, isRegister, registerError, registerErrorMsg, fullname} = this.props
		return (
			<div className='registerForm'>
				<div className='loading' />
				{isRegister &&
					<div>
						{registerError && <p>
							{registerErrorMsg} Vui lòng thử lại.<br /> <br />
							<button
								onClick={this.resetForm}
								className='button-ok'></button>
						</p>}
						{!registerError && <p>
							Đăng ký thành công <span className='register-name'>{fullname}</span>
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
