import { __ } from '@wordpress/i18n';
import { PanelBody, Button, TabPanel, GradientPicker } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export const BackgroundControl = ( { 
    bgImageUrl, bgImageId, bgGradient, bgVideoUrl, bgVideoId, setAttributes 
} ) => {

    // Helpers to clear competing backgrounds when a new one is applied
    const onSelectImage = ( media ) => {
        setAttributes( { 
            bgImageId: media.id, bgImageUrl: media.url,
            bgGradient: '', bgVideoId: 0, bgVideoUrl: '' 
        } );
    };

const onSelectGradient = ( currentGradient ) => {
        setAttributes( { 
            // If Gutenberg sends undefined (when cleared), save it as an empty string
            bgGradient: currentGradient || '', 
            bgImageId: 0, bgImageUrl: '', bgVideoId: 0, bgVideoUrl: '' 
        } );
    };

    const onSelectVideo = ( media ) => {
        setAttributes( { 
            bgVideoId: media.id, bgVideoUrl: media.url,
            bgImageId: 0, bgImageUrl: '', bgGradient: '' 
        } );
    };

    // Helper to completely clear all backgrounds
    const clearBackgrounds = () => {
        setAttributes( { 
            bgImageId: 0, bgImageUrl: '', bgGradient: '', bgVideoId: 0, bgVideoUrl: '' 
        } );
    };

    return (
        <PanelBody title={ __( 'Advanced Background', 'wm' ) } initialOpen={ false }>
            <TabPanel
                className="wm-background-tabs"
                activeClass="is-active"
                tabs={ [
                    { name: 'image', title: 'Image', className: 'tab-image' },
                    { name: 'gradient', title: 'Gradient', className: 'tab-gradient' },
                    { name: 'video', title: 'Video', className: 'tab-video' },
                ] }
            >
                { ( tab ) => {
                    if ( tab.name === 'image' ) {
                        return (
                            <div className="wm-bg-image-control" style={ { marginTop: '15px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ onSelectImage }
                                        allowedTypes={ [ 'image' ] }
                                        value={ bgImageId }
                                        render={ ( { open } ) => (
                                            <>
                                                { bgImageUrl ? (
                                                    <div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
                                                        <img src={ bgImageUrl } alt="Background preview" style={ { width: '100%', borderRadius: '4px' } } />
                                                        <Button variant="secondary" onClick={ open }>Replace Image</Button>
                                                        <Button variant="link" isDestructive onClick={ clearBackgrounds }>Remove Image</Button>
                                                    </div>
                                                ) : (
                                                    <Button variant="primary" onClick={ open } style={ { width: '100%', justifyContent: 'center' } }>Select Image</Button>
                                                ) }
                                            </>
                                        ) }
                                    />
                                </MediaUploadCheck>
                            </div>
                        );
                    }

                    if ( tab.name === 'gradient' ) {
        return (
            <div className="wm-bg-gradient-control" style={ { marginTop: '15px' } }>
                <GradientPicker
                    // FIX: Force empty strings to be 'undefined' so the parser doesn't crash
                    value={ bgGradient || undefined } 
                    onChange={ onSelectGradient }
                    gradients={ [
                        { name: 'Subtle Ash', gradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', slug: 'subtle-ash' },
                        { name: 'Night Sky', gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', slug: 'night-sky' },
                    ] }
                />
                { bgGradient && (
                    <Button variant="link" isDestructive onClick={ clearBackgrounds } style={ { marginTop: '10px' } }>
                        Clear Gradient
                    </Button>
                )}
            </div>
        );
    }

                    if ( tab.name === 'video' ) {
                        return (
                            <div className="wm-bg-video-control" style={ { marginTop: '15px' } }>
                                <p style={ { fontSize: '12px', color: '#666' } }>Video will play automatically, muted, in a loop behind your content.</p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ onSelectVideo }
                                        allowedTypes={ [ 'video' ] }
                                        value={ bgVideoId }
                                        render={ ( { open } ) => (
                                            <>
                                                { bgVideoUrl ? (
                                                    <div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
                                                        <video src={ bgVideoUrl } style={ { width: '100%', borderRadius: '4px' } } muted />
                                                        <Button variant="secondary" onClick={ open }>Replace Video</Button>
                                                        <Button variant="link" isDestructive onClick={ clearBackgrounds }>Remove Video</Button>
                                                    </div>
                                                ) : (
                                                    <Button variant="primary" onClick={ open } style={ { width: '100%', justifyContent: 'center' } }>Select Video</Button>
                                                ) }
                                            </>
                                        ) }
                                    />
                                </MediaUploadCheck>
                            </div>
                        );
                    }
                } }
            </TabPanel>
        </PanelBody>
    );
};