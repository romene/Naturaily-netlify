import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Angular2TokenService } from 'angular2-token';
import { StateService } from "@uirouter/angular";
import { SignUpModalComponent } from "../sign-up-modal/sign-up-modal.component";
import { ForgotModalComponent } from "../forgot-modal/forgot-modal.component";
import { NotificationsService } from "../../api/notifications.service";

@Component({
  selector: 'sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {

  data:object = {};
  error;

  @Input()
  message:string;

  constructor(private _tokenService: Angular2TokenService,
              private stateService:StateService,
              public activeModal: NgbActiveModal,
              public modalService: NgbModal,
              private notificationsService: NotificationsService) { }

  ngOnInit() {
  }

  close() {
    this.activeModal.close();
  }

  login(form, data) {
    if (form.invalid) {
      console.log(form)
      return
    }
    this._tokenService.signIn(data)
      .subscribe(
        res => {
          this.notificationsService.getNavNotifications();
          this.activeModal.close()
        },
        error => {
          this.error = JSON.parse(error._body);
          console.log(this.error)
        }
      );
  }

  showRegister() {
    this.activeModal.close()
    const modalRef = this.modalService.open(SignUpModalComponent, {windowClass: 'align-modal-center register-modal'});
  }

  showForgot() {
    this.activeModal.close()
    const modalRef = this.modalService.open(ForgotModalComponent, {windowClass: 'align-modal-center forgot-modal'});
  }

  loginFacebook(){
    this._tokenService.signInOAuth('facebook')
    .subscribe(
      res => this.activeModal.close(),
      error => console.log(error)
    );
  }
  loginGoogle(){
    this._tokenService.signInOAuth('google')
    .subscribe(
      res => this.activeModal.close(),
      error => console.log(error)
    );
  }

}
