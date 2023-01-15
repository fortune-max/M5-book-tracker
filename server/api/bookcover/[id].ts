import _coverMap from '../../../assets/bookcovers.json';

const coverMap  = _coverMap as {[goodreadsID: string]: string};

export default defineEventHandler((event) => {
    return coverMap[event.context.params.id]
})