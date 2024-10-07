import React from 'react';
import Box from './Box';
import CardTextLeft from './CardText/CardTextLeft';
import CardTextCenter from './CardText/CardTextCenter';
import VidBox1 from './VidBox1'
import VidBox2 from './VidBox2'


const BoxGrid = () => {

    const imgLinkArr=["https://www.sequoiacap.com/wp-content/uploads/sites/6/2024/09/Reddit-Ink.png?w=880&h=880&crop=1",
        "https://www.sequoiacap.com/wp-content/uploads/sites/6/2024/09/brian-halligan-ink.jpg",
        "https://www.sequoiacap.com/wp-content/uploads/sites/6/2024/08/AI-Supply-Chain-Ink.jpg?resize=480,480",
    ];


    return (
        <div className="grid grid-cols-2 mx-4 md:mx-12 md:grid-cols-4 ">

            <div className="col-span-2 row-span-2">
                 <Box img={imgLinkArr[0]} upText1="PODCAST" upText2="LISTEN" cardText={
                 <CardTextLeft
                    mainText="The Reddit Story with Steve Huffman "
                    secondaryText="Crucible Moments S2:E3"
                 />} 
                 />
            </div>

            <div className="col-span-2 row-span-2">
                 <Box img={imgLinkArr[1]} upText1="PERSPECTIVE" upText2="READ" cardText={
                 <CardTextCenter
                    mainText="From Startup Founder to Scaleup CEO"
                    secondaryText="By Brian Halligan"
                 />
                 }/>
            </div>

            <div className="col-span-1 row-span-1">
                <VidBox2 upText1="SPOTLIGHT" upText2="READ" vidLink="https://www.sequoiacap.com/wp-content/uploads/sites/6/2024/05/ai-gif-2.mp4" cardText={
                <CardTextCenter
                    mainText="Watershed: Climate Awakenings at Scale"
                />}/>
            </div>
            <div className="col-span-1 row-span-1">
                 <Box img={imgLinkArr[2]} upText1="PERSPECTIVE" upText2="READ" cardText={
                 <CardTextCenter
                    secondaryText="The AI Supply Chain"
                 />
                 }/>
            </div>


            <div className="col-span-2 row-span-2">
                <VidBox1 upText1="SPOTLIGHT" upText2="READ" vidLink="https://www.sequoiacap.com/wp-content/uploads/sites/6/2024/04/ink.mp4" cardText={
                <CardTextCenter
                    mainText="Watershed: Climate Awakenings at Scale"
                />}/>
            </div>

            <div className="col-span-2 row-span-2">
                <VidBox1 upText1="SPOTLIGHT" upText2="READ" vidLink="https://www.sequoiacap.com/wp-content/uploads/sites/6/2024/03/Sequence-01.mp4" cardText={
                <CardTextCenter
                    textBlack={true}
                    mainText="Ai Ascent 2024"
                    secondaryText="Video highlights from our AI conference"
                />}/>
            </div>

            
            
            
        </div>
    );
};

export default BoxGrid;
