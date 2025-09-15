import { PlayCircleIcon } from "lucide-react"
import { DefaultInput } from "../DefaultInput"
import { DefaultButton } from "../DefaultButton"
import { Cycles } from "../Cycles"

export const MainForm = () => {
    return (

        <form className="form" action="">

            <div className="formRow">
                <DefaultInput labelText="Task" type="text" id="meuInput" />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                <DefaultButton icon={<PlayCircleIcon />} />
            </div>

        </form>

    )
}