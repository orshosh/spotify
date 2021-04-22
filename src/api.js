
export type PlaylistProps={
    description: string,
    image_url: string,
    name: string,
    playlist_id: string

};

export type PlaylistCarouselProps={
    name:string,
    data: PlaylistProps[]
};

const tempData = require('./data.json');
const recentlyPlayed:PlaylistCarouselProps = {name:'Recently Played',data:tempData.playlists};
const featuredPlaylists:PlaylistCarouselProps = {name:'Featured Playlists',data:tempData.playlists};
const Mood:PlaylistCarouselProps = {name:'Mood',data:tempData.playlists};
const homePageList:PlaylistCarouselProps[] = [recentlyPlayed,featuredPlaylists,Mood];

export default homePageList;