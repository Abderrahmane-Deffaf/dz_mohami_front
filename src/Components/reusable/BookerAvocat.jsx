
import { Button } from '../ui/button'
import BookerAvocat from '../BookerAvocat'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,

    DialogTrigger,
} from "../ui/dialog"

export function DialogBookerAvocat() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="border-2 p-2">Réservez une heure</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogDescription>
                        <BookerAvocat />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button className="px-[7rem] w-full" type="submit">
                            Booker un avocat
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

}
export default DialogBookerAvocat;
