import React, { ChangeEvent, FormEvent, useState } from 'react';
import "../../styles/form.scss"

interface FormState {
    title: string;
    description: string;
    readTime: string;
    image: File | null;
    content: string;
}

const MyForm: React.FC = () => {
    const [form, setForm] = useState<FormState>({
        title: '',
        description: '',
        readTime: '',
        image: null,
        content: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prevState => ({ ...prevState, image: e.target.files ? e.target.files[0] : null }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (

        <div className="form">
            <form>
                <div className="row">
                    <h4>New Post</h4>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Title" />
                        <div className="input-icon"><i className="fa fa-t"></i></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="Description" />
                        <div className="input-icon"><i className="fa fa-comment"></i></div>
                    </div>
                    <div className="input-group input-group-icon">
                        <input type="text" placeholder="ReadTime" />
                        <div className="input-icon"><i className="fa fa-stopwatch"></i></div>
                    </div>
                    <div className="input-group input-group-icon content">
                        <textarea placeholder="please note that you can use md format" />
                        <div className="input-icon"><i className="fa fa-file-lines"></i></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-half">
                        <h4>Date of Post</h4>
                        <div className="input-group">
                            <div className="col-third">
                                <input type="text" placeholder="DD" />
                            </div>
                            <div className="col-third">
                                <input type="text" placeholder="MM" />
                            </div>
                            <div className="col-third">
                                <input type="text" placeholder="YYYY" />
                            </div>
                        </div>
                    </div>
                    <div className="col-half">
                        <label>
                            Image:
                            <input type="file" name="image" onChange={handleImageChange} />
                        </label>
                    </div>
                </div>


            </form>
        </div>
    );
};

export default MyForm;
