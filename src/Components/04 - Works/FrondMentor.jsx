import React from 'react';
import frontLogo from '../../assets/images/front.png';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import styled from 'styled-components';

const itemData = [
    //img: link da imagem
    //title: titulo do projeto
    //link: link do projeto
    {
        img: 'https://cdn.pixabay.com/photo/2022/03/09/05/47/business-7057063_960_720.jpg',
        link: 'https://magnificent-pony-9c051e.netlify.app/',
        title: 'Advice Generator',
    },
    {
        img: 'https://cdn.pixabay.com/photo/2018/04/01/19/53/credit-card-3281946_960_720.jpg',
        link: 'https://curious-piroshki-df3802.netlify.app/',
        title: 'Interactive Card',
    },
    {
        title: 'Component with sign-up form',
        link: 'https://whimsical-piroshki-fb2a8b.netlify.app/',
        img: 'https://kinsta.com/pt/wp-content/uploads/sites/3/2020/01/formularios-wordpress-1024x512.png',
    },
    {
        title: 'Rating component',
        link: 'https://luminous-cat-c95749.netlify.app/',
        img: 'https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2022/02/tipode-de-avaliacao-de-desempenho.jpg',
    },
    {
        title: 'Base apparel',
        link: 'https://neon-haupia-790ccd.netlify.app/',
        img: 'https://images.pexels.com/photos/13722242/pexels-photo-13722242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
        title: 'Qrcode',
        link: 'https://timely-meerkat-7ce050.netlify.app/',
        img: 'https://cdn.pixabay.com/photo/2021/07/05/10/12/qr-code-6388733_960_720.png',
    },
];

const Img_Contain = styled.img`
    height: 10rem;
    object-fit: cover;
    @media (min-width: 640px) {
        height: 15rem;
    }
`;

const FrondMentor = () => {
    return (
        <div className="m-auto w-[18.88rem] sm:w-11/12 mt-10">
            <div className="mb-10">
                <div className="flex items-center ">
                    <h2 className="leading-8  text-[1.9rem]  font-[600] drop-shadow-md uppercase">
                        Projetos Frontend Mentor
                    </h2>
                    <img
                        className="w-16 sm:w-10  ml-2 rounded-full drop-shadow-md"
                        src={frontLogo}
                        alt="logo do site front end mentor"
                    />
                </div>

                <p className="pt-2">
                    Frontend mentor é uma plataforma de desafios frontend que
                    propõe ao profissional usar suas principais stacks e
                    conhecimentos para construção de componentes.
                </p>
                <span className="italic">
                    para visitar um projeto, clique no mesmo.
                </span>
            </div>

            <ImageList>
                <ImageListItem key="Subheader" cols={2}></ImageListItem>
                {itemData.map((item) => (
                    <a href={item.link}>
                        <ImageListItem key={item.img}>
                            <Img_Contain
                                // style={{ width: '20rem', height: '20rem' }}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar title={item.title} />
                        </ImageListItem>
                    </a>
                ))}
            </ImageList>
        </div>
    );
};

export default FrondMentor;
