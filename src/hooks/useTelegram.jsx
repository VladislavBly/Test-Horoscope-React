const tg = window.Telegram.WebApp;

function useTelegram() {
    const BackButton = () => {
        if(tg.BackButton.isVisible){
            tg.BackButton.hide()
        }
        else{
            tg.BackButton.show()
        }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user?.first_name,
        BackButton

    }
}

export default useTelegram;
