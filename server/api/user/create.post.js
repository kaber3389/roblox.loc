export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        const {server, public: publicConfig} = useRuntimeConfig();

        const requestBody = {
            ...body,
            apiKey: server.apiKey
        };

        const response = await $fetch(`${publicConfig.apiBase}/user/create`, {
            method: 'POST',
            body: requestBody,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return {
            success: true,
            status: 200,
            data: response
        };
    } catch (error) {
        return {
            success: false,
            status: error.response?.status || 500,
            error: error.message || 'Произошла ошибка при создании пользователя',
            data: null
        };
    }
});