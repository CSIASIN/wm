import { __ } from '@wordpress/i18n';
import { PanelBody, Button, TabPanel, GradientPicker } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export const BackgroundControl = ( { 
    bgImageUrl, bgImageId, bgGradient, bgVideoUrl, bgVideoId, setAttributes 
} ) => {
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
                    // --- IMAGE TAB ---
                    if ( tab.name === 'image' ) {
                        return (
                            <div className="wm-bg-image-control" style={ { marginTop: '15px' } }>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( media ) => setAttributes( { bgImageId: media.id, bgImageUrl: media.url } ) }
                                        allowedTypes={ [ 'image' ] }
                                        value={ bgImageId }
                                        render={ ( { open } ) => (
                                            <>
                                                { bgImageUrl ? (
                                                    <div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
                                                        <img src={ bgImageUrl } alt="Background preview" style={ { width: '100%', borderRadius: '4px' } } />
                                                        <Button variant="secondary" onClick={ open }>Replace Image</Button>
                                                        <Button variant="link" isDestructive onClick={ () => setAttributes( { bgImageId: 0, bgImageUrl: '' } ) }>Remove Image</Button>
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

                    // --- GRADIENT TAB ---
                    if ( tab.name === 'gradient' ) {
                        return (
                            <div className="wm-bg-gradient-control" style={ { marginTop: '15px' } }>
                                <GradientPicker
                                    value={ bgGradient }
                                    onChange={ ( currentGradient ) => setAttributes( { bgGradient: currentGradient } ) }
                                    // You can add your own theme gradients here
                                    gradients={ [
                                        { name: 'Subtle Ash', gradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)', slug: 'subtle-ash' },
                                        { name: 'Night Sky', gradient: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', slug: 'night-sky' },
                                    ] }
                                />
                                { bgGradient && (
                                    <Button variant="link" isDestructive onClick={ () => setAttributes( { bgGradient: '' } ) } style={ { marginTop: '10px' } }>
                                        Clear Gradient
                                    </Button>
                                )}
                            </div>
                        );
                    }

                    // --- VIDEO TAB ---
                    if ( tab.name === 'video' ) {
                        return (
                            <div className="wm-bg-video-control" style={ { marginTop: '15px' } }>
                                <p style={ { fontSize: '12px', color: '#666' } }>Video will play automatically, muted, in a loop behind your content.</p>
                                <MediaUploadCheck>
                                    <MediaUpload
                                        onSelect={ ( media ) => setAttributes( { bgVideoId: media.id, bgVideoUrl: media.url } ) }
                                        allowedTypes={ [ 'video' ] }
                                        value={ bgVideoId }
                                        render={ ( { open } ) => (
                                            <>
                                                { bgVideoUrl ? (
                                                    <div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
                                                        <video src={ bgVideoUrl } style={ { width: '100%', borderRadius: '4px' } } muted />
                                                        <Button variant="secondary" onClick={ open }>Replace Video</Button>
                                                        <Button variant="link" isDestructive onClick={ () => setAttributes( { bgVideoId: 0, bgVideoUrl: '' } ) }>Remove Video</Button>
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