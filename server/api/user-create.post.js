export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const runtimeConfig = useRuntimeConfig();
    body.apiKey = runtimeConfig.server.apiKey;
    let result;

    try {
        result = await $fetch(`${runtimeConfig.public.apiBase}/user/create`, {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (err) {
        console.log(err);
        throw createError({
            message: result,
            statusCode: 401,
        });
    }
    return {
        message: result,
    };
});