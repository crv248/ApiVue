<?php

class UserSubscriber implements EventSubscriberInterface
{
    private $passwordEncoder;
    public function __construct(UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->passwordEncoder = $passwordEncoder;
    }
    public static function getSubscribedEvents()
    {
        return [ KernelEvents::VIEW => ['encodePassword', EventPriorities::PRE_WRITE]];
    }
    public function encodePassword(GetResponseForControllerResultEvent $event)
    {
        $user = $event->getControllerResult();
        if (!$user instanceof User || ($user instanceof User && $user->plainPassword === null)) {
            return;
        }
        $user->password = $this->passwordEncoder->encodePassword($user, $user->plainPassword);
        $user->eraseCredentials();
    }
}