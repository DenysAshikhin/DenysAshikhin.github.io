import AdSense from 'react-adsense';
import { useState, useEffect, useRef } from 'react';

const Google = () => {
    const [isOpen, setIsOpen] = useState(true);
    const timeTurnedOff = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setIsOpen(true);
            }, 5000)
        }
    }, [isOpen])
    return null;

    return (
        <div>
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '12.5vh',
                        right: '1px',
                        zIndex: 2,
                        backgroundColor: 'white',
                        maxHeight: '75vh',
                        maxWidth: '256px',
                        // height: '75vh',
                        // width: '256px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <div style={{
                        position: 'relative',
                        maxHeight: '73vh',
                        width: '256px'
                        // height: '256px', width: '256px'
                    }}>

                        {/* <div
                            style={{ height: '128px', width: '90px' }}
                        >
                            HELLO
                        </div> */}
                        <AdSense.Google
                            client='ca-pub-1393057374484862'
                            slot='7848701905'
                            // style={{ display: 'block' }}
                            format='auto'
                        //    // layout='in-article'
                        />

                        <div
                            style={{ position: 'absolute', bottom: '5px', right: '1px' }}
                            onMouseDown={(e) => {
                                setIsOpen(false);
                                timeTurnedOff.current = new Date();
                            }}>
                            x
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default Google;