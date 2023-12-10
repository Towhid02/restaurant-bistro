import { Parallax } from 'react-parallax';


const Cover = ({img, title}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt={title}
        strength={-200}
    > <div>
    <div className="hero h-[600px] bg-cover bg-center px-36 py-28">
<div className="hero-overlay bg-opacity-70 rounded-xl "></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md text-white font-itim">
<h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
<p className="mb-5">Would you like to try a dish?</p>
</div>
</div>
</div>
</div>
    </Parallax>
       
    );
};

export default Cover;