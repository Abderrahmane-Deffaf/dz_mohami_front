
import { Button } from '../ui/button'
import GoogleButton from '../reusable/GoogleButton'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    
    DialogTrigger,
} from "../ui/dialog"

export function DialogCloseButton() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="border-2 p-2">Add comment</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogDescription>
                        Voulez-vous continue ?               
                             </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <GoogleButton />
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}
export default DialogCloseButton;
