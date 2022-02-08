import styled from 'styled-components'

export const Container = styled.article`
    background: #ffffff;
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    height: 450px;
    font-family: Inter;
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    height: 150px;
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    justify-content: space-between;
    height: 100%;
`

export const Heading = styled.h2`
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin: 0px;
    padding-bottom: 10px;
`

export const Copy = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
`

export const Summary = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #9c9c9c;
    margin: 0px;
`

export const BottomInformation = styled.div``

export const Label = styled.span`
    border-radius: 12px;
    background-color: #d1fae5;
    color: #065f46;
    font-size: 14px;
    line-height: 20px;
    padding: 4px 8px;
`

export const Name = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
`

export const Date = styled.div`
    font-size: 14px;
    line-height: 20px;
    color: #6b7280;
`

export const AvatarAndText = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 16px;
`

export const AuthorDate = styled.div`
    padding-left: 12px;
`
