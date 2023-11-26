package com.bantads.auth.events;

import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import com.bantads.auth.CriarAuthDTO;
import com.bantads.auth.AuthService;
import com.bantads.auth.AuthService;
import com.bantads.auth.events.RemoverAutenticacaoEvent;
import com.bantads.auth.events.CriarAutenticacaoEvent;
import com.bantads.auth.events.SetPasswordEvent;

/**
 * This class receives the events and triggers the associated
 * business logic.
 */
@Slf4j
@Component
class EventsHandler {

    private AuthService authService;

    EventsHandler(final AuthService authService) {
        this.authService = authService;
    }

    @RabbitListener(queues = "criar_autenticacao")
    void handleCriarAuthEvent(final CriarAutenticacaoEvent cae) {
        CriarAuthDTO ccd = new CriarAuthDTO();
        ccd.setEmail(cae.getEmail());
        ccd.setCpf(cae.getCpf());
        ccd.setNivel(cae.getNivel());
        ccd.setSenha(cae.getSenha());
        authService.create(ccd);
        log.info("Autenticacao criada email :" + cae.getEmail());
    }

    @RabbitListener(queues = "excluir_autenticacao")
    void handleRemoverAuthEvent(final RemoverAutenticacaoEvent cae) {
        authService.remove(cae.getCpf());
        log.info("Autenticacao removed cliente cpf:" + cae.getCpf());
    }

    @RabbitListener(queues = "alterar_senha_autenticacao")
    void handleRemoverAuthEvent(final SetPasswordEvent cae) {
        authService.setPassword(cae.getEmail(), cae.getSenha());
        log.info("Autenticacao atualizada cliente emai:" + cae.getEmail());
    }

}