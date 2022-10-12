import { List } from '../../components/List';
import { IImagePost } from '../../types/imagePost';
import { IMusicPost } from '../../types/musicPost';

export function SavedList() {
  const music: IMusicPost[] = [
    {
      identification: '88a261d4-09ba-45fe-81cc-ff10c0eb1052',
      name: 'Londres Freestyle',
      artists: ['Veigh', 'Nagalli', 'Supernova Ent'],
      duration: 136,
      imageUrl:
        'https://lh3.googleusercontent.com/Tm4BCNzluBcawAzvLYFxVvTna5wkWxpd-dUpuBjzpNPvaq-T4F1mqnDWUn2d_OMbTPJS27t5EB8YpmUN=w544-h544-l90-rj',

      fileUrl: 'https://audio.jukehost.co.uk/kRgsjbaMBaB7ZDoDm4QZRDuqGx05j8c9',
      description: 'Londres Freestyle',
      explicit: true,
      categories: [],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      comments: [],
      createdAt: new Date(2022, 10, 5, 14, 32, 0)
    },
    {
      identification: '3f8f6860-c69e-424b-adc9-2cc7119e4773',
      name: 'Facilitei',
      artists: ['L7NNON', 'Ajax'],
      duration: 212,
      imageUrl:
        'https://lh3.googleusercontent.com/oT8cJ_TwsnTjYsnFM85SUGrQBAy4aX_-SILaIcpCr7yCuMgAFhYUdlv7EB41s1idApyptUT0HUnyoBWV=w60-h60-l90-rj',
      fileUrl: 'https://audio.jukehost.co.uk/yh03xpsgkuEIZ04ogpInYUhvPhYVW5gQ',
      description: 'Facilitei L7',
      explicit: false,
      categories: [],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      comments: [],
      createdAt: new Date(2022, 10, 5, 14, 32, 0)
    },
    {
      identification: 'a3565ca0-d375-4cdb-ab20-0d830425de48',
      name: 'Sem pressa',
      artists: [
        'Mc Ryan SP',
        'Caio Passos',
        'DJ Guh Mix',
        'MC GP',
        'MC Kadu',
        'MC Kanhoto'
      ],
      duration: 307,
      imageUrl:
        'https://lh3.googleusercontent.com/jIq8vQe0_Z8j5XmgExJxkqewVrEhKMzrBmJz9jjLCxDxggH5So12rPOMYVIRydqkzp3akA67MhCTcx4=w544-h544-l90-rj',
      fileUrl: 'https://audio.jukehost.co.uk/DXXwxHGjLq2DHh63tPWxj4TwJBSbrFTJ',
      description: 'Sem pressa',
      explicit: true,
      categories: [],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      comments: [],
      createdAt: new Date(2022, 10, 5, 14, 32, 0)
    }
  ];

  const image: IImagePost[] = [
    {
      identification: '943b0dcb-ba69-4374-a525-beb3966e4ed6',
      name: 'Grafitasso',
      description: 'Imagem no estilo grafite',
      img: [
        'https://images.unsplash.com/flagged/photo-1573803625411-9edf9a6ae3b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJhd2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
      ],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      categories: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 15, 30, 0)
    },
    {
      identification: 'fb248b1a-47fc-43ba-8da1-1c2a3d60b69d',
      name: 'Essa memo',
      description: 'Imagem foda',
      img: [
        'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1631d294-6e9b-4201-a5a8-2c1aa40baed7/dfc7cmz-5b8db738-57cb-4a39-9edc-1d555250ce85.jpg/v1/fit/w_414,h_311,q_70,strp/commission___57_by_lulusama_dfc7cmz-414w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTYwIiwicGF0aCI6IlwvZlwvMTYzMWQyOTQtNmU5Yi00MjAxLWE1YTgtMmMxYWE0MGJhZWQ3XC9kZmM3Y216LTViOGRiNzM4LTU3Y2ItNGEzOS05ZWRjLTFkNTU1MjUwY2U4NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sJcN-we0asGOIcGUXH_anCytwyZTsJgQRnIyOSz1K20'
      ],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      categories: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 15, 30, 0)
    },
    {
      identification: '499b27d2-adcf-4040-9448-39b0020e6f42',
      name: 'Revolução',
      description: 'outra foda',
      img: [
        'https://images.unsplash.com/photo-1617503752587-97d2103a96ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
      ],
      usersHasLiked: [],
      usersHasSaved: [],
      usersHasReported: [],
      categories: [],
      comments: [],
      createdAt: new Date(2022, 10, 1, 15, 30, 0)
    }
  ];
  return <List title="Salvos" images={image} musics={music} />;
}
