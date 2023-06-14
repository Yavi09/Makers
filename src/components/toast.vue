<style>
.toast {
    position: absolute;
    top: 25px;
    right: 30px;
    border-radius: 12px;
    background: #393534;
    padding: 20px 35px 20px 25px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border-left: 6px solid #4070f4;
    overflow: hidden;
    transform: translateX(calc(100% + 30px));
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
}

.toast.active {
    transform: translateX(0%);
}

.toast .toast-content {
    display: flex;
    align-items: center;
}

.toast-content .check {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 35px;
    background-color: #4070f4;
    color: #fff;
    font-size: 20px;
    border-radius: 50%;
}

.toast-content .message {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
}

.message .text {
    font-size: 20px;
    font-weight: 400;
    color: var(--bs-card-color);
}

.message .text.text-1 {
    font-weight: 600;
    color: #fff;
}

.toast .close {
    position: absolute;
    top: 10px;
    right: 15px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.7;
}

.toast .close:hover {
    opacity: 1;
}

.toast .progress {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 100%;
    background: #ddd;
}

.toast .progress:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-color: #4070f4;
}

.progress.active:before {
    animation: progress 5s linear forwards;
}

@keyframes progress {
    100% {
        right: 100%;
    }
}

button {
    padding: 12px 20px;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: #11131e;
    color: whitesmoke;
    border: 1px solid #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #000000;
    color: white;
}

.toast.active~button {
    pointer-events: none;
}
</style>
<template>
    <div class="toast active">
        <div class="toast-content">
            <i class="fas fa-solid fa-check check"></i>

            <div class="message">
                <span class="text text-1">{{ title }}</span>
                <span class="text text-2">{{ msg }}</span>
            </div>
        </div>
        <i class="fa-solid fa-xmark close"></i>

        <div class="progress"></div>
    </div>
</template>
<script>
export default {
    name: 'toast',
    props: {
        active: {
            type: Boolean,
            required: true
        },
        msg: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        showToast() {
            // acceder a las props
            // this.msg
            // mostrar toast
            this.active = true;

            // ocultar después de 4 segundos
            setTimeout(() => {
                this.active = false;
            }, 4000)
        }
    }
}
</script>