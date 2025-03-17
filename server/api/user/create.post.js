export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();

    body.apiKey = runtimeConfig.server.apiKey;

    const response = await $fetch(`${runtimeConfig.public.apiBase}/user/create`, {
        method: "POST",
        body: body,
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return {
        status: response.status,
        data: response,
    };
});