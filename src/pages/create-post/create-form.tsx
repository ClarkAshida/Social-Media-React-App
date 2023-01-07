import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'

interface CreateFormData {
    title: string;
    description: string;
}

export const Createform = () => {

    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a Description."),
    });
    const { register, handleSubmit, formState: { errors }, } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    });

    const postRef = collection(db, "posts");

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postRef, {
            ...data,
            username: user?.displayName,
            userId: user?.uid
        })
        navigate("/");
    };

    return (
        <form className="form-container" onSubmit={handleSubmit(onCreatePost)}>
            <h1>Create Post</h1>
            <input className="form-input" maxLength={50} type="text" placeholder='Post title'{...register("title")} />
            <p style={{color: "red"}}>{errors.title?.message}</p>
            <textarea maxLength={1645} placeholder='Post description' {...register("description")} />
            <p style={{color: "red"}}>{errors.description?.message}</p>
            <input className="form-btn" type="submit" placeholder='Submit...'/>
        </form>
    )
}