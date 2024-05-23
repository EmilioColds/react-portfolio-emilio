import React, { useState } from "react";

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        
        if (!form.name) newErrors.name = 'A name is required';
        if (!form.email) newErrors.email = 'An email is required';
        if (!form.message) newErrors.message = 'A message is required';
        if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'The email is invalid';

        if(Object.keys(newErrors).length === 0) {
            alert('Form submitted');
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input type='text' name='name' value={form.name} onChange={handleChange} />
                    {errors.name && <span>{errors.name}</span>}
                </label>
                <label>
                    Email: 
                    <input type='email' name='email' value={form.email} onChange={handleChange} />
                    {errors.email && <span>{errors.email}</span>}
                </label>
                <label>
                    Message: 
                    <textarea name='message' value={form.message} onChange={handleChange}> </textarea>
                    {errors.message && <span>{errors.message}</span>}
                </label>
                <button type='submit'> Submit </button>
            </form>
        </section>
    );
}

export default Contact;