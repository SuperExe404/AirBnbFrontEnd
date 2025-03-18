const apiService = { 
    get: async function (url: string): Promise<any> {
        console.log('get', url);

        return  new Promise((resolve, reject) => {
            fetch('${process.env,NEXT_PUBLIC_API_HOST}${url}', {
                method: 'GET',
                headers: {
                    'Accept': 'applications/json',
                    'Content-Type': 'applications/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response', json);

                    resolve(json);
                })
        })
    }   
}

export default apiService;