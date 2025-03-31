import './SignUp.scss'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function SignUp() {
    const schema = yup.object().shape({
        email: yup.string().email("Invalid email").required("Email is required"),
        password: yup.string().min(8, "Password must be at least 8 characters").max(16, "Password must be at most 16 characters").required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required("Confirm password is required"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <Header />
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="form__input" placeholder="Email" {...register("email")} />
                <p className="form__errors">{errors.email?.message}</p>

                <input type="password" className="form__input" placeholder="Password" {...register("password")} />
                <p className="form__errors">{errors.password?.message}</p>

                <input type="password" className="form__input" placeholder="Confirm Password" {...register("confirmPassword")} />
                <p className="form__errors">{errors.confirmPassword?.message}</p>

                <button type="submit" className="form__btn">Sign Up</button>
            </form>
            <Footer />
        </>
    );
}

export default SignUp;
