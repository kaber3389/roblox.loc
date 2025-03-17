export default defineEventHandler(async () => {
    const runtimeConfig = useRuntimeConfig();

    const response = await $fetch(`${runtimeConfig.public.apiBase}/user/index?apiKey=${runtimeConfig.server.apiKey}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return {
        data: response,
    };
});