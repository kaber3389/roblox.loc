export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        const {server, public: publicConfig} = useRuntimeConfig();

        const requestBody = {
            ...body,
            apiKey: server.apiKey
        };

        const response = await $fetch(`${publicConfig.apiBase}/user/login`, {
            method: 'POST',
            body: requestBody,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            success: !!response.id,
            status: response.id ? 200 : 500,
            data: response,
        }
    } catch (error) {
        return {
            success: false,
            status: error.response.status || 500,
            data: JSON.parse(error.response.statusText)
        };
    }
});