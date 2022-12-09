import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #e71d36;

    p {
        font-size: 15px;
        margin-bottom: 12px;
        padding-left: 12px;
        justify-content: right;
        color: #ffff;
        font-style: italic;
    }
`;

export const FooterWrap = styled.div`
    padding: 40px 100px;
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 16px auto 0 auto;
   
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`;
 