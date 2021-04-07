import React from 'react';
import {Link } from 'react-router-dom';
import {InfoContainer,
    InfoWrapper,
    InfoRow,
    Colum1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Colum2,
    ImgWrap,
    Img,NavBtn,NavBtnLink
} from './infoElements.js';
const InfoSection = ({lightBg,
    id,href,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Colum1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <NavBtn>
                <NavBtnLink to={href}>{buttonLabel}</NavBtnLink>
            </NavBtn>
                        </TextWrapper>
                        </Colum1>
                        <Colum2>
                        <ImgWrap>
                        <Img src={img}  alt={alt} />
                        </ImgWrap>
                        </Colum2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection;
