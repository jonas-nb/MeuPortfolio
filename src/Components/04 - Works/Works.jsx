import React from 'react';
import Card from './Card';

const Works = () => {
    return (
        <div className="mt-10 mb-56">
            <h1 className="text-center font-[600] drop-shadow-md">Trabalhos</h1>
            {/* carrousel com main project */}

            <div>
                <Card
                    icon="https://images.unsplash.com/photo-1661615342382-70e308dfd086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    bg="https://images.unsplash.com/photo-1661615342382-70e308dfd086?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
            </div>
        </div>
    );
};

export default Works;
