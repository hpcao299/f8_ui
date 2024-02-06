const swr = {
    value: {
        fetcher: url =>
            fetch(`${process.env.REACT_APP_SERVER_BASE_URL}${url}`).then(res => res.json()),
        revalidateOnFocus: false,
        dedupingInterval: 2 * 60 * 60 * 1000,
        keepPreviousData: true,
    },
};

export default swr;
