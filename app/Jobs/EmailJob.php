<?php

namespace App\Jobs;

use App\Mail\EmailSent;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class EmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $email;
    public $name;

    public function __construct($name, $email)
    {
        $this->email = $email;
        $this->name = $name;
    }

    public function handle()
    {
        Mail::to($this->email)->send(new EmailSent($this->name));
    }
}
