import React from 'react';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';

const Contact = () => {
    return (
        <>
            <PageTitle title="Contact us - "></PageTitle>
            <div className='px-5'>
                
            <div className="mockup-code my-9 w-2/4 mx-auto">
                <pre data-prefix="1"><code>npm i Contact</code></pre> 
                <pre data-prefix="2"><code>"Contact" is under development...</code></pre> 
                <pre data-prefix="3" className="bg-warning text-warning-content"><code>Coming soon!</code></pre>
            </div>

                <Footer />
            </div>
        </>

    );
};

export default Contact;