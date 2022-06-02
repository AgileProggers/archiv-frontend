const BASE_URL = import.meta.env.VITE_BASE_URL;

export function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)).toLocaleString() + ' ' + sizes[i];
}

export async function fetchApi(params) {
    const response = await fetch(`${BASE_URL}${params}`);
    const resp = await response.json();
    return resp;
}
