import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
/* 
guia props
bg = recebe background do card (link) 
bgicon = recebe o color do background icon tailwind
icon = recebe imagem do icon
gradiente = recebe o gradiente do card em tailwind
position = recebe o background position em tailwind
titulo = recebe o titulo do projeto
sobre = recebe uma pequena descrição do projeto
link = recebe o endereço do projeto
github = recebe o endereço do code do projeto
*/

const CardComponent = (props) => {
    return (
        //recebe um background com a imagem do projeto

        <Card
            className="mt-10 flex flex-col justify-between"
            sx={{ maxWidth: 320, width: 300 }}
        >
            <CardMedia
                className="h-48 object-top"
                component="img"
                image={props.bg}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.sobre}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.github}>
                    <CodeIcon />
                </Button>
                <Button href={props.link} size="small">
                    Conheça Clicando Aqui
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardComponent;
