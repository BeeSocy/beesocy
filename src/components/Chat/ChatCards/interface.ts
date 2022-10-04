export interface ICardInfoProps {
img:string;
nickname:string;
available:boolean;
message:boolean;
messagetime:boolean;
}

export const FakeBack:ICardInfoProps = {
    img: "../img/photoprofile.jpg",
    nickname: "Kira Soca Fofo",
    available: false,
    message: false,
    messagetime: false
}