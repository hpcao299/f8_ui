const fetcher = async url => {
    const res = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}${url}`);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = await res.json();
        throw error;
    }

    return res.json();
};

const swr = {
    value: {
        fetcher,
        revalidateOnFocus: false,
        dedupingInterval: 2 * 60 * 60 * 1000,
        keepPreviousData: true,
    },
};

export default swr;
