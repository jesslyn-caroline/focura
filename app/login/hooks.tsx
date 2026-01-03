

function LoginHooks() {

    function handleSubmit() {
        event?.preventDefault();
        alert(window.innerWidth);
    }

    return { handleSubmit }
}

export default LoginHooks;